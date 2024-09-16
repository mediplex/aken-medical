'use server';
import { z } from 'zod';

export const submit = async (
  currentState: unknown,
  data: FormData
): Promise<{
  error?: string | string[];
  message?: string | string[];
  data?: unknown;
}> => {
  console.log('Submitting form data:', data);

  // Simulate a server delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Define the schema using zod for form validation both name and email are required
  const schema = z.object({
    name: z.string().nonempty('Name is required'),
    email: z.string().email('Invalid email address'),
  });
  // Validate the form data
  const result = schema.safeParse(data);

  if (!result.success) {
    // If validation fails, return the error messages
    return {
      error: result.error.errors.map((err: z.ZodIssue) => err.message),
    };
  }

  // If validation succeeds, return the success message and data
  return {
    message: 'Form submitted successfully',
    data: result.data,
  };
};
