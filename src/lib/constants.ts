export const EVENT_DATE = "2026-07-07";
export const EVENT_DATE_DISPLAY = "Tuesday, July 7, 2026";
export const EVENT_TIME_START = "8:00 AM";
export const EVENT_TIME_END = "10:00 AM";
export const EVENT_TIME_DISPLAY = "8:00 AM – 10:00 AM";
export const VOLUNTEER_GOAL = 777;

export const RALLY_POINT_SEED_DATA = [
  // Priority Tier 1 — High Traffic / Post-July 4th
  { name: "Garfield Park", address: "2345 Pagoda Dr, Indianapolis, IN", lat: 39.7276, lng: -86.1549, zone: "Near South", capacity: 50 },
  { name: "White River State Park", address: "801 W Washington St, Indianapolis, IN", lat: 39.7655, lng: -86.1710, zone: "Downtown", capacity: 50 },
  { name: "Riverside Park — North Zone", address: "2420 E Riverside Dr, Indianapolis, IN", lat: 39.8220, lng: -86.1196, zone: "Northwest", capacity: 40 },
  { name: "Riverside Park — South Zone", address: "2420 E Riverside Dr, Indianapolis, IN", lat: 39.8170, lng: -86.1196, zone: "Northwest", capacity: 40 },

  // Priority Tier 2 — Urban Core / Commercial Districts
  { name: "Military Park", address: "601 W New York St, Indianapolis, IN", lat: 39.7740, lng: -86.1713, zone: "Downtown", capacity: 30 },
  { name: "Fountain Square District", address: "1056 Virginia Ave, Indianapolis, IN", lat: 39.7485, lng: -86.1460, zone: "Near South", capacity: 35 },
  { name: "Fletcher Place Neighborhood", address: "630 Virginia Ave, Indianapolis, IN", lat: 39.7520, lng: -86.1490, zone: "Near South", capacity: 30 },
  { name: "Bates-Hendricks Neighborhood", address: "1528 S Madison Ave, Indianapolis, IN", lat: 39.7380, lng: -86.1550, zone: "Near South", capacity: 30 },

  // Priority Tier 3 — Major Neighborhood Parks
  { name: "Ellenberger Park", address: "5301 E St Clair St, Indianapolis, IN", lat: 39.7797, lng: -86.0878, zone: "East", capacity: 30 },
  { name: "Brookside Park", address: "3500 Brookside Pkwy S Dr, Indianapolis, IN", lat: 39.7883, lng: -86.1048, zone: "Near East", capacity: 30 },
  { name: "Washington Park", address: "3130 E 30th St, Indianapolis, IN", lat: 39.8051, lng: -86.1100, zone: "North", capacity: 30 },
  { name: "Broad Ripple Park", address: "1550 Broad Ripple Ave, Indianapolis, IN", lat: 39.8690, lng: -86.1411, zone: "North", capacity: 30 },

  // Priority Tier 4 — Strategic Neighborhoods
  { name: "Highland Park", address: "1100 E New York St, Indianapolis, IN", lat: 39.7700, lng: -86.1430, zone: "Near East", capacity: 25 },
  { name: "Southwestway Park", address: "8400 Mann Rd, Indianapolis, IN", lat: 39.6648, lng: -86.2245, zone: "West", capacity: 35 },
  { name: "Sahm Park", address: "6801 E 91st St, Indianapolis, IN", lat: 39.9157, lng: -86.0590, zone: "North", capacity: 25 },
  { name: "Arsenal Park", address: "4602 Indianola Ave, Indianapolis, IN", lat: 39.8265, lng: -86.1320, zone: "Near East", capacity: 25 },

  // Priority Tier 5 — Downtown Extensions
  { name: "University Park", address: "300 S Meridian St, Indianapolis, IN", lat: 39.7660, lng: -86.1580, zone: "Downtown", capacity: 25 },
  { name: "Dr. MLK Jr. Park & Landmark for Peace", address: "1702 Dr. Martin Luther King Jr St, Indianapolis, IN", lat: 39.7750, lng: -86.1650, zone: "Downtown", capacity: 25 },
  { name: "Colts Canal Playscape", address: "Canal Walk, Indianapolis, IN", lat: 39.7700, lng: -86.1670, zone: "Downtown", capacity: 20 },
  { name: "Watkins Park", address: "2360 Dr. Martin Luther King Jr St, Indianapolis, IN", lat: 39.7855, lng: -86.1610, zone: "Near North", capacity: 20 },

  // Priority Tier 6 — Coverage Zones
  { name: "Spades Park", address: "1800 Nowland Ave, Indianapolis, IN", lat: 39.7650, lng: -86.1100, zone: "East", capacity: 20 },
  { name: "Bertha Ross Park", address: "3700 N Michigan Rd, Indianapolis, IN", lat: 39.8180, lng: -86.1850, zone: "Near North", capacity: 20 },
  { name: "Northwestway Park", address: "5253 W 62nd St, Indianapolis, IN", lat: 39.8538, lng: -86.2254, zone: "Northwest", capacity: 25 },
  { name: "Thatcher Park", address: "4649 W Vermont St, Indianapolis, IN", lat: 39.7500, lng: -86.2000, zone: "West", capacity: 20 },
  { name: "Skiles Test Park", address: "3701 Mitthoeffer Rd, Indianapolis, IN", lat: 39.8075, lng: -85.9811, zone: "Far East", capacity: 20 },
] as const;

export const TSHIRT_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"] as const;

export const FAQ_CATEGORIES = [
  {
    label: "General",
    items: [
      {
        question: "What is Indy Street Sweep?",
        answer: "Indy Street Sweep is a citywide Day of Caring on July 7, 2026, where 777 volunteers will gather across 25 locations to clean up Indianapolis. It's one massive morning of neighbors serving neighbors.",
      },
      {
        question: "When is the event?",
        answer: "July 7, 2026 from 8:00 AM to 10:00 AM.",
      },
      {
        question: "Who is behind this?",
        answer: "Indy Street Sweep is presented by Citizens 7 in partnership with Together Indy, Multiply Indiana, and Roots Realty Co.",
      },
    ],
  },
  {
    label: "Volunteering",
    items: [
      {
        question: "How do I sign up?",
        answer: "Click the \"Sign Up to Serve\" button, choose your rally point location, and fill out the quick registration form. You'll get a confirmation email with everything you need.",
      },
      {
        question: "Can I bring my family or a group?",
        answer: "Absolutely. Just let us know how many people are in your group when you sign up.",
      },
{
        question: "What should I bring?",
        answer: "Comfortable clothes you don't mind getting dirty, closed-toe shoes, sunscreen, and a water bottle. We'll handle the rest.",
      },
      {
        question: "How do I choose a location?",
        answer: "During sign-up you'll see a map of rally points across Indianapolis. Pick the one closest to you or wherever you want to make an impact.",
        link: { label: "View the Map", href: "/map" },
      },
    ],
  },
  {
    label: "Site Leaders",
    items: [
      {
        question: "What does a site leader do?",
        answer: "Site leaders manage a group of roughly 30 volunteers at their assigned rally point. You'll help coordinate the cleanup and make sure your crew has what they need.",
      },
    ],
  },
  {
    label: "Logistics",
    items: [
      {
        question: "What if it rains?",
        answer: "The event is rain or shine. We'll communicate any major weather updates via email before the event.",
      },
{
        question: "Do I need to be affiliated with a church to participate?",
        answer: "Not at all. This is open to everyone, all backgrounds, all neighborhoods. Just come ready to serve.",
      },
    ],
  },
  {
    label: "Contact",
    items: [
      {
        question: "I have a question that's not answered here.",
        answer: "Reach out to Max Moore at max@maxmoore.com and we'll get back to you.",
      },
    ],
  },
];
