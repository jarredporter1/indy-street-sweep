export const EVENT_DATE = "2026-07-07";
export const EVENT_DATE_DISPLAY = "Tuesday, July 7, 2026";
export const EVENT_TIME_START = "8:00 AM";
export const EVENT_TIME_END = "10:00 AM";
export const EVENT_TIME_DISPLAY = "8:00 AM – 10:00 AM";
export const VOLUNTEER_GOAL = 777;

export const RALLY_POINT_SEED_DATA = [
  // Near Eastside
  { name: "Ellenberger Park", address: "5301 E St Clair St, Indianapolis, IN", lat: 39.7797, lng: -86.0878, zone: "Near Eastside", capacity: 35 },
  { name: "Brookside Park", address: "3500 Brookside Pkwy S Dr, Indianapolis, IN", lat: 39.7883, lng: -86.1048, zone: "Near Eastside", capacity: 40 },
  { name: "Arsenal Park", address: "1002 E 30th St, Indianapolis, IN", lat: 39.8051, lng: -86.1399, zone: "Near Eastside", capacity: 30 },

  // Near Westside
  { name: "Haughville Park", address: "520 Belleview Pl, Indianapolis, IN", lat: 39.7748, lng: -86.1950, zone: "Near Westside", capacity: 30 },
  { name: "Washington Park", address: "3130 E 30th St, Indianapolis, IN", lat: 39.8051, lng: -86.1100, zone: "Near Westside", capacity: 35 },

  // Downtown
  { name: "Military Park", address: "601 W New York St, Indianapolis, IN", lat: 39.7740, lng: -86.1713, zone: "Downtown", capacity: 40 },
  { name: "University Park", address: "200 S Meridian St, Indianapolis, IN", lat: 39.7660, lng: -86.1580, zone: "Downtown", capacity: 25 },

  // Northside
  { name: "Broad Ripple Park", address: "1550 Broad Ripple Ave, Indianapolis, IN", lat: 39.8690, lng: -86.1411, zone: "Northside", capacity: 40 },
  { name: "Holliday Park", address: "6363 Spring Mill Rd, Indianapolis, IN", lat: 39.8710, lng: -86.1740, zone: "Northside", capacity: 35 },
  { name: "Marott Park", address: "7350 College Ave, Indianapolis, IN", lat: 39.8785, lng: -86.1490, zone: "Northside", capacity: 30 },

  // Far Northside
  { name: "Northwestway Park", address: "5253 W 62nd St, Indianapolis, IN", lat: 39.8538, lng: -86.2254, zone: "Far Northside", capacity: 35 },
  { name: "Sahm Park", address: "6801 E 91st St, Indianapolis, IN", lat: 39.9157, lng: -86.0590, zone: "Far Northside", capacity: 30 },

  // Southside
  { name: "Garfield Park", address: "2345 Pagoda Dr, Indianapolis, IN", lat: 39.7276, lng: -86.1549, zone: "Southside", capacity: 45 },
  { name: "Perry Park", address: "451 E Stop 11 Rd, Indianapolis, IN", lat: 39.6577, lng: -86.1454, zone: "Southside", capacity: 35 },
  { name: "Carson Park", address: "5001 Shelby St, Indianapolis, IN", lat: 39.7023, lng: -86.1450, zone: "Southside", capacity: 30 },

  // Far Southside
  { name: "Southwestway Park", address: "8400 Mann Rd, Indianapolis, IN", lat: 39.6648, lng: -86.2245, zone: "Far Southside", capacity: 30 },
  { name: "Sarah T. Bolton Park", address: "8401 Southeastern Ave, Indianapolis, IN", lat: 39.6702, lng: -86.0140, zone: "Far Southside", capacity: 30 },

  // Westside
  { name: "Eagle Creek Park", address: "7840 W 56th St, Indianapolis, IN", lat: 39.8470, lng: -86.2956, zone: "Westside", capacity: 50 },
  { name: "Riverside Regional Park", address: "2420 E Riverside Dr, Indianapolis, IN", lat: 39.8197, lng: -86.1196, zone: "Westside", capacity: 40 },
  { name: "Krannert Park", address: "605 S High School Rd, Indianapolis, IN", lat: 39.7624, lng: -86.2588, zone: "Westside", capacity: 35 },

  // Far Eastside
  { name: "Skiles Test Park", address: "3701 Mitthoeffer Rd, Indianapolis, IN", lat: 39.8075, lng: -85.9811, zone: "Far Eastside", capacity: 30 },
  { name: "Post Road Community Park", address: "1313 S Post Rd, Indianapolis, IN", lat: 39.7470, lng: -85.9941, zone: "Far Eastside", capacity: 30 },

  // Midtown
  { name: "Watkins Park", address: "2360 Dr. Martin Luther King Jr St, Indianapolis, IN", lat: 39.7855, lng: -86.1610, zone: "Midtown", capacity: 30 },
  { name: "Tarkington Park", address: "45 W 40th St, Indianapolis, IN", lat: 39.8211, lng: -86.1607, zone: "Midtown", capacity: 35 },
  { name: "Crown Hill", address: "3402 Boulevard Pl, Indianapolis, IN", lat: 39.8181, lng: -86.1680, zone: "Midtown", capacity: 25 },
] as const;

export const TSHIRT_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"] as const;

export const FAQ_CATEGORIES = [
  {
    label: "General",
    items: [
      {
        question: "What is Indy Street Sweep?",
        answer: "Indy Street Sweep is a citywide Day of Caring on July 7, 2026, where 777 volunteers will gather across 20-30 locations to clean up Indianapolis. It's one massive morning of neighbors serving neighbors.",
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
