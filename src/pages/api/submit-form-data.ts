import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { ContactFormData } from "@/components";

// https://console.cloud.google.com/iam-admin/serviceaccounts/details/108220443515719796800/permissions?hl=th&project=aken-medical

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Only POST requests allowed",
    });
  }

  const data: ContactFormData = req.body;

  console.log("log from the API");
  console.log(req.body);

  try {
    const auth = new google.auth.GoogleAuth({
      keyFilename: "./src/aken-medical-8d564d7bea9d.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1ydpPrep6ONWr1OkVHTeSpAScerndem-pAqgDEiqDXcQ"; // Replace with your spreadsheet ID
    const range = "'Website Leads'!A2:E"; // Replace with the desired range
    const valueInputOption = "USER_ENTERED";

    // Write the data to the spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource: {
        // date
        values: [
          [Date.now(), data.formId, data.name, data.email, data.tel, data.msg],
        ],
      },
    });

    res.status(200).json({ message: "Data written successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error writing to spreadsheet" });
  }
}
