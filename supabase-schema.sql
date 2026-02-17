-- ============================================================
-- INDY STREET SWEEP - Database Schema
-- Run this in Supabase SQL Editor after creating your project
-- ============================================================

-- Rally Points Table
CREATE TABLE rally_points (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  description TEXT,
  capacity INTEGER DEFAULT 40,
  zone TEXT,
  site_leader_id UUID,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Volunteers Table
CREATE TABLE volunteers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  group_size INTEGER DEFAULT 1 CHECK (group_size >= 1 AND group_size <= 50),
  church TEXT,
  tshirt_size TEXT CHECK (tshirt_size IN ('XS','S','M','L','XL','2XL','3XL')),
  role TEXT NOT NULL CHECK (role IN ('volunteer', 'site_leader')),
  rally_point_id UUID NOT NULL REFERENCES rally_points(id),
  previous_experience TEXT,
  trial_run_available BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_volunteers_rally_point ON volunteers(rally_point_id);
CREATE INDEX idx_volunteers_email ON volunteers(email);

-- View: Rally points with volunteer counts
CREATE OR REPLACE VIEW rally_points_with_counts AS
SELECT
  rp.id,
  rp.name,
  rp.address,
  rp.lat,
  rp.lng,
  rp.description,
  rp.capacity,
  rp.zone,
  rp.site_leader_id,
  COALESCE(SUM(v.group_size), 0)::INTEGER AS volunteer_count,
  COUNT(v.id)::INTEGER AS signup_count
FROM rally_points rp
LEFT JOIN volunteers v ON v.rally_point_id = rp.id
GROUP BY rp.id, rp.name, rp.address, rp.lat, rp.lng,
         rp.description, rp.capacity, rp.zone, rp.site_leader_id;

-- Function: Get total volunteer count
CREATE OR REPLACE FUNCTION get_total_volunteer_count()
RETURNS INTEGER AS $$
  SELECT COALESCE(SUM(group_size), 0)::INTEGER FROM volunteers;
$$ LANGUAGE SQL STABLE;

-- Row Level Security
ALTER TABLE rally_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Rally points are publicly readable"
  ON rally_points FOR SELECT USING (true);

CREATE POLICY "Anyone can sign up as a volunteer"
  ON volunteers FOR INSERT WITH CHECK (true);

CREATE POLICY "Volunteer details are admin-only"
  ON volunteers FOR SELECT USING (auth.role() = 'authenticated');

-- ============================================================
-- SEED DATA: 25 Rally Points across Indianapolis
-- ============================================================

INSERT INTO rally_points (name, address, lat, lng, zone, capacity) VALUES
  ('Ellenberger Park', '5301 E St Clair St, Indianapolis, IN', 39.7797, -86.0878, 'Near Eastside', 35),
  ('Brookside Park', '3500 Brookside Pkwy S Dr, Indianapolis, IN', 39.7883, -86.1048, 'Near Eastside', 40),
  ('Arsenal Park', '1002 E 30th St, Indianapolis, IN', 39.8051, -86.1399, 'Near Eastside', 30),
  ('Haughville Park', '520 Belleview Pl, Indianapolis, IN', 39.7748, -86.1950, 'Near Westside', 30),
  ('Washington Park', '3130 E 30th St, Indianapolis, IN', 39.8051, -86.1100, 'Near Westside', 35),
  ('Military Park', '601 W New York St, Indianapolis, IN', 39.7740, -86.1713, 'Downtown', 40),
  ('University Park', '200 S Meridian St, Indianapolis, IN', 39.7660, -86.1580, 'Downtown', 25),
  ('Broad Ripple Park', '1550 Broad Ripple Ave, Indianapolis, IN', 39.8690, -86.1411, 'Northside', 40),
  ('Holliday Park', '6363 Spring Mill Rd, Indianapolis, IN', 39.8710, -86.1740, 'Northside', 35),
  ('Marott Park', '7350 College Ave, Indianapolis, IN', 39.8785, -86.1490, 'Northside', 30),
  ('Northwestway Park', '5253 W 62nd St, Indianapolis, IN', 39.8538, -86.2254, 'Far Northside', 35),
  ('Sahm Park', '6801 E 91st St, Indianapolis, IN', 39.9157, -86.0590, 'Far Northside', 30),
  ('Garfield Park', '2345 Pagoda Dr, Indianapolis, IN', 39.7276, -86.1549, 'Southside', 45),
  ('Perry Park', '451 E Stop 11 Rd, Indianapolis, IN', 39.6577, -86.1454, 'Southside', 35),
  ('Carson Park', '5001 Shelby St, Indianapolis, IN', 39.7023, -86.1450, 'Southside', 30),
  ('Southwestway Park', '8400 Mann Rd, Indianapolis, IN', 39.6648, -86.2245, 'Far Southside', 30),
  ('Sarah T. Bolton Park', '8401 Southeastern Ave, Indianapolis, IN', 39.6702, -86.0140, 'Far Southside', 30),
  ('Eagle Creek Park', '7840 W 56th St, Indianapolis, IN', 39.8470, -86.2956, 'Westside', 50),
  ('Riverside Regional Park', '2420 E Riverside Dr, Indianapolis, IN', 39.8197, -86.1196, 'Westside', 40),
  ('Krannert Park', '605 S High School Rd, Indianapolis, IN', 39.7624, -86.2588, 'Westside', 35),
  ('Skiles Test Park', '3701 Mitthoeffer Rd, Indianapolis, IN', 39.8075, -85.9811, 'Far Eastside', 30),
  ('Post Road Community Park', '1313 S Post Rd, Indianapolis, IN', 39.7470, -85.9941, 'Far Eastside', 30),
  ('Watkins Park', '2360 Dr. Martin Luther King Jr St, Indianapolis, IN', 39.7855, -86.1610, 'Midtown', 30),
  ('Tarkington Park', '45 W 40th St, Indianapolis, IN', 39.8211, -86.1607, 'Midtown', 35),
  ('Crown Hill', '3402 Boulevard Pl, Indianapolis, IN', 39.8181, -86.1680, 'Midtown', 25);
