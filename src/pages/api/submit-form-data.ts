import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { ContactFormData } from "@/components";

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

  try {
    // Validate form data
    const errors = validateFormData(data);
    if (errors.length > 0) {
      return res.status(400).json({
        message: "Invalid form data",
        errors,
      });
    }

    const auth = new google.auth.GoogleAuth({
      keyFilename: "./src/aken-medical-8d564d7bea9d.json",
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth });

    const valueInputOption = "USER_ENTERED";


    sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      valueInputOption,
      range: process.env.RANGE,
      requestBody: {
        values: [[Date.now(), data.formName, data.name, data.email, data.msg]],
      },
    });

    res.status(200).json({ message: "Data written successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error writing to spreadsheet" });
  }
}

function validateFormData(data: ContactFormData): string[] {
  const errors: string[] = [];

  // Add your validation rules here
  if (!data.name) {
    errors.push("Name is required");
  }
  if (!data.email || !isValidEmail(data.email)) {
    errors.push("Invalid email address");
  }
  if (!data.msg) {
    errors.push("Message is required");
  }

  return errors;
}

function isValidEmail(email: string): boolean {
  // Add your email validation logic here
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
