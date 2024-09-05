'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';

import {
  UserIcon,
  ExclamationCircleIcon,
  // EnvelopeIcon,
  // ChatBubbleLeftEllipsisIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ArrowRightCircleIcon,
} from './icons';

export type SqueezeFormData = {
  formName: string;
  name: string;
  scientist: boolean;
  medicalDoctor: boolean;
  investor: boolean;
  other: boolean;
  email: string;
  msg: string;
};

export const SqueezeForm: React.FC = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<SqueezeFormData>({
    defaultValues: {
      formName: 'Contact Form',
      name: '',
      investor: false,
      medicalDoctor: false,
      other: false,
      scientist: false,
      email: '',
      msg: '',
    },
    resetOptions: {
      keepIsSubmitted: false,
    },
  });

  const onSubmit: SubmitHandler<SqueezeFormData> = async (SqueezeFormData) => {
    try {
      const response = await fetch('/api/submit-form-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(SqueezeFormData),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        reset();
      } else {
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex max-w-7xl flex-col items-center py-20 sm:mx-auto sm:px-6 lg:px-8">
      <form
        className="flex w-full flex-col items-center gap-3 bg-white/30 p-5 sm:min-w-96 sm:rounded-3xl sm:shadow-2xl sm:backdrop-blur-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent">
          Contact us
        </h2>

        <div className="flex w-full flex-col gap-4">
          <input type="hidden" {...register('formName')} />

          <div className="flex flex-col items-start">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-blue-950"
            >
              Name
            </label>
            <div className="relative mt-2 w-full rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="size-6 fill-none stroke-blue-950/30" />
              </div>
              <input
                id="name"
                placeholder="What is your name?"
                autoComplete="name"
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="block w-full rounded-full border-0 px-10 py-1.5 text-blue-950 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {!!errors.name && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon className="size-6 fill-red-500" />
                </div>
              )}
            </div>
            {!!errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-500">
                {errors.name?.message}
              </p>
            )}
          </div>

          {/* ... similar structure for email and message fields */}
        </div>

        <button
          className="mt-5 flex w-full items-center justify-center gap-1 rounded-full bg-blue-950 py-4 font-semibold text-blue-50 shadow-xl"
          type="submit"
        >
          {isSubmitting ? (
            <>
              <PaperAirplaneIcon className="size-6 fill-orange-500 stroke-blue-950" />
              <span>Sending...</span>
            </>
          ) : isSubmitSuccessful ? (
            <>
              <CheckCircleIcon className="size-6 fill-green-500 stroke-blue-950" />
              <span>Sent with success</span>
            </>
          ) : (
            <>
              <ArrowRightCircleIcon className="size-6 fill-white stroke-blue-950" />
              <span>Send</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
