"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  ExclamationCircleIcon,
  EnvelopeIcon,
  UserIcon,
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/20/solid";

export type ContactFormData = {
  formId: string;
  name: string;
  email: string;
  tel: string;
  msg: string;
};

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>({
    defaultValues: {
      formId: "",
      name: "",
      email: "",
      msg: "",
      tel: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (contactFormData) => {
    try {
      const response = await fetch("/api/submit-form-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactFormData),
      });

      if (response.ok) {
        // console.log("Data submitted successfully");
        reset();

        // Handle success, e.g., show a success message
      } else {
        console.error("Error submitting data");
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="flex max-w-7xl flex-col items-center px-4 py-20 sm:px-6 lg:px-8">
      <form
        className="flex w-full max-w-96 flex-col gap-3 items-center rounded-3xl bg-white/30 p-5 shadow-2xl backdrop-blur-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-lg font-bold text-blue-950">
          This is a nice form
        </h1>

        <input type="hidden" {...register("formId")} />

        <Control
          {...register("name")}
          label="Name"
          type="text"
          placeholder="Your full name"
          errorMessage=""
          PrefixIcon={UserIcon}
        />
        <Control
          {...register("email")}
          label="Email"
          type="email"
          placeholder="Your best email address"
          errorMessage=""
          PrefixIcon={EnvelopeIcon}
        />
        <Control
          {...register("tel")}
          label="Phone number"
          type="tel"
          placeholder="Your phone number"
          errorMessage=""
          PrefixIcon={PhoneIcon}
        />

        <Control
          {...register("tel")}
          label="Message"
          placeholder="How can we help you?"
          errorMessage=""
          PrefixIcon={ChatBubbleLeftEllipsisIcon}
        />

        <button
          className="mt-5 w-full rounded-full bg-blue-950 py-4 font-semibold text-blue-50 shadow-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const Control = (props) => (
  <div className="w-full">
    <label
      htmlFor="email"
      className="block text-sm font-medium leading-6 text-blue-950"
    >
      {props.label}
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      {props.type ? (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <props.PrefixIcon
              aria-hidden="true"
              className="h-5 w-5 text-blue-950/50"
            />
          </div>
          <input
            {...props}
            className="block w-full rounded-full border-0 px-10 py-1.5 text-blue-950 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-red-500"
            />
          </div>
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-start pl-3 pt-2">
            <props.PrefixIcon
              aria-hidden="true"
              className="h-5 w-5 text-blue-950/50"
            />
          </div>
          <textarea
            rows={5}
            {...props}
            className="block w-full rounded-xl border-0 px-10 py-1.5 text-blue-950 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-start pr-3 pt-2">
            <ExclamationCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-red-500"
            />
          </div>
        </>
      )}
    </div>
    <p id="email-error" className="mt-2 text-sm text-red-600">
      {props.errorMessage}
    </p>
  </div>
);
