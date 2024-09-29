'use server';
// import { z } from 'zod';

// const learnMoreFormSchema = z.object({
//   form: z.literal('learnMoreForm'),
//   //timestamp: z.number(), //server time
//   doctor: z.boolean(),
//   scientist: z.boolean(),
//   investor: z.boolean(),
//   other: z.boolean(),
//   name: z.string().trim().min(2, { message: '' }).max(50, { message: '' }),
//   email: z.string().trim().email({ message: '' }),
// });

import { google } from 'googleapis';

const learnMoreFormAction = async (
  previousState: unknown,
  formData: FormData
): Promise<{ error?: string; message?: unknown }> => {
  console.log(Object.fromEntries(formData.entries()));
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(
        process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON || '{}'
      ),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const data = Object.fromEntries(formData.entries());
    await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth });

    const valueInputOption = 'USER_ENTERED';

    const parisTime = new Date().toLocaleString('en-US', {
      timeZone: 'Europe/Paris',
    });
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      valueInputOption,
      range: process.env.RANGE,
      requestBody: {
        values: [
          [
            parisTime,
            data.form,
            data.name,
            data.email,
            '',
            data.doctor,
            data.scientist,
            data.investor,
            data.other,
          ],
        ],
      },
    });
    return { message: 'Success!' };
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export default learnMoreFormAction;
