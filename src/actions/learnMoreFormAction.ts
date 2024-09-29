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

const learnMoreFormAction = async (
  previousState: unknown,
  formData: FormData
): Promise<{ error?: string; message?: unknown }> => {
  if (previousState) return { error: 'Form already submitted' };
  console.log('submitting form data');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('form data submitted');
  if (formData.get('name') !== 'Mehdi')
    return { error: 'Name is already taken' };
  else return { message: Object.entries(formData) };
};

export { learnMoreFormAction };
