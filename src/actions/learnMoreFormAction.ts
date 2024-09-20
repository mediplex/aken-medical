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
