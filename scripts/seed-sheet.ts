// Run with: npx tsx scripts/seed-sheet.ts
import { google } from "googleapis";

const SHEET_ID = "1DUxW613nO5So3YFGlIybwvwwAzd6BKd0RrMJXH5VwoQ";

import * as fs from "fs";
import * as path from "path";

const keyFile = JSON.parse(
  fs.readFileSync(
    path.join("/Users/jarredporter/Downloads", "indy-street-sweep-5b686d65ce32.json"),
    "utf8"
  )
);

const auth = new google.auth.JWT({
  email: keyFile.client_email,
  key: keyFile.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const RALLY_POINTS = [
  ["rp-1", "Ellenberger Park", "5301 E St Clair St, Indianapolis, IN", "39.7797", "-86.0878", "", "35", "Near Eastside", ""],
  ["rp-2", "Brookside Park", "3500 Brookside Pkwy S Dr, Indianapolis, IN", "39.7883", "-86.1048", "", "40", "Near Eastside", ""],
  ["rp-3", "Arsenal Park", "1002 E 30th St, Indianapolis, IN", "39.8051", "-86.1399", "", "30", "Near Eastside", ""],
  ["rp-4", "Haughville Park", "520 Belleview Pl, Indianapolis, IN", "39.7748", "-86.1950", "", "30", "Near Westside", ""],
  ["rp-5", "Washington Park", "3130 E 30th St, Indianapolis, IN", "39.8051", "-86.1100", "", "35", "Near Westside", ""],
  ["rp-6", "Military Park", "601 W New York St, Indianapolis, IN", "39.7740", "-86.1713", "", "40", "Downtown", ""],
  ["rp-7", "University Park", "200 S Meridian St, Indianapolis, IN", "39.7660", "-86.1580", "", "25", "Downtown", ""],
  ["rp-8", "Broad Ripple Park", "1550 Broad Ripple Ave, Indianapolis, IN", "39.8690", "-86.1411", "", "40", "Northside", ""],
  ["rp-9", "Holliday Park", "6363 Spring Mill Rd, Indianapolis, IN", "39.8710", "-86.1740", "", "35", "Northside", ""],
  ["rp-10", "Marott Park", "7350 College Ave, Indianapolis, IN", "39.8785", "-86.1490", "", "30", "Northside", ""],
  ["rp-11", "Northwestway Park", "5253 W 62nd St, Indianapolis, IN", "39.8538", "-86.2254", "", "35", "Far Northside", ""],
  ["rp-12", "Sahm Park", "6801 E 91st St, Indianapolis, IN", "39.9157", "-86.0590", "", "30", "Far Northside", ""],
  ["rp-13", "Garfield Park", "2345 Pagoda Dr, Indianapolis, IN", "39.7276", "-86.1549", "", "45", "Southside", ""],
  ["rp-14", "Perry Park", "451 E Stop 11 Rd, Indianapolis, IN", "39.6577", "-86.1454", "", "35", "Southside", ""],
  ["rp-15", "Carson Park", "5001 Shelby St, Indianapolis, IN", "39.7023", "-86.1450", "", "30", "Southside", ""],
  ["rp-16", "Southwestway Park", "8400 Mann Rd, Indianapolis, IN", "39.6648", "-86.2245", "", "30", "Far Southside", ""],
  ["rp-17", "Sarah T. Bolton Park", "8401 Southeastern Ave, Indianapolis, IN", "39.6702", "-86.0140", "", "30", "Far Southside", ""],
  ["rp-18", "Eagle Creek Park", "7840 W 56th St, Indianapolis, IN", "39.8470", "-86.2956", "", "50", "Westside", ""],
  ["rp-19", "Riverside Regional Park", "2420 E Riverside Dr, Indianapolis, IN", "39.8197", "-86.1196", "", "40", "Westside", ""],
  ["rp-20", "Krannert Park", "605 S High School Rd, Indianapolis, IN", "39.7624", "-86.2588", "", "35", "Westside", ""],
  ["rp-21", "Skiles Test Park", "3701 Mitthoeffer Rd, Indianapolis, IN", "39.8075", "-85.9811", "", "30", "Far Eastside", ""],
  ["rp-22", "Post Road Community Park", "1313 S Post Rd, Indianapolis, IN", "39.7470", "-85.9941", "", "30", "Far Eastside", ""],
  ["rp-23", "Watkins Park", "2360 Dr. Martin Luther King Jr St, Indianapolis, IN", "39.7855", "-86.1610", "", "30", "Midtown", ""],
  ["rp-24", "Tarkington Park", "45 W 40th St, Indianapolis, IN", "39.8211", "-86.1607", "", "35", "Midtown", ""],
  ["rp-25", "Crown Hill", "3402 Boulevard Pl, Indianapolis, IN", "39.8181", "-86.1680", "", "25", "Midtown", ""],
];

async function seed() {
  console.log("Setting up Google Sheet...");

  // Get existing sheet info
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
  const existingSheets = spreadsheet.data.sheets || [];

  const requests: any[] = [];

  // Rename first sheet to RallyPoints if needed
  const firstSheet = existingSheets[0];
  if (firstSheet && firstSheet.properties?.title !== "RallyPoints") {
    requests.push({
      updateSheetProperties: {
        properties: { sheetId: firstSheet.properties?.sheetId, title: "RallyPoints" },
        fields: "title",
      },
    });
  }

  // Add Signups sheet if it doesn't exist
  const hasSignups = existingSheets.some((s) => s.properties?.title === "Signups");
  if (!hasSignups) {
    requests.push({
      addSheet: { properties: { title: "Signups" } },
    });
  }

  if (requests.length > 0) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SHEET_ID,
      requestBody: { requests },
    });
  }

  // Write RallyPoints headers + data
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: "RallyPoints!A1",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        ["id", "name", "address", "lat", "lng", "description", "capacity", "zone", "site_leader_id"],
        ...RALLY_POINTS,
      ],
    },
  });

  // Write Signups headers
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: "Signups!A1",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        ["name", "email", "phone", "group_size", "church", "rally_point_id", "tshirt_size", "role", "previous_experience", "trial_run_available", "signed_up_at"],
      ],
    },
  });

  console.log("Done! Rally Points and Signups tabs created and populated.");
}

seed().catch(console.error);
