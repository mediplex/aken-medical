"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  ExclamationCircleIcon,
  EnvelopeIcon,
  UserIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";

export type ContactFormData = {
  formName: string;
  name: string;
  email: string;
  msg: string;
};

export const ContactForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful,},
  } = useForm<ContactFormData>({
    defaultValues: {
      formName: "Contact Form",
      name: "",
      email: "",
      msg: "",
    },
    resetOptions:{
      keepIsSubmitted: false
    }
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (contactFormData) => {
    console.log(contactFormData);
    try {
      const response = await fetch("/api/submit-form-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactFormData),
      });

      if (response.ok) {
        console.log("Data submitted successfully");

        const timeOutId = setTimeout(() => {
          reset();
        }, 5000);

        // clearTimeout(timeoutId);
      } else {
        console.error("Error submitting data");
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="flex max-w-7xl flex-col items-center py-20 sm:mx-auto sm:px-6 lg:px-8">
      <form
        className="flex w-full flex-col items-center gap-3 bg-white/30 p-5 sm:min-w-96 sm:rounded-3xl sm:shadow-2xl sm:backdrop-blur-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center text-lg font-bold text-blue-950">
          Contact us
        </h2>

        <div className="flex w-full flex-col gap-4">
          <input type="hidden" {...register("formName")} />

          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-blue-950"
            >
              Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-950/30"
                />
              </div>
              <input
                id="name"
                placeholder="What is your name?"
                autoComplete="name"
                {...register("name", { required: "Name is required" })}
                type="text"
                className="block w-full rounded-full border-0 px-10 py-1.5 text-blue-950 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {!!errors.name && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-red-500"
                  />
                </div>
              )}
            </div>
            {!!errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-600">
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-blue-950"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <EnvelopeIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-950/30"
                />
              </div>
              <input
                id="email"
                autoComplete="email"
                placeholder="What is your best email?"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                type="email"
                className="block w-full rounded-full border-0 px-10 py-1.5 text-blue-950 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {!!errors.email && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-red-500"
                  />
                </div>
              )}
            </div>
            {!!errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-600">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="msg"
              className="block text-sm font-medium leading-6 text-blue-950"
            >
              Message
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex pl-3 pt-2">
                <ChatBubbleLeftEllipsisIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-950/30"
                />
              </div>
              <textarea
                id="msg"
                placeholder="Tell us how we can help you"
                rows={4}
                {...register("msg", { required: "Message is required" })}
                className="block w-full rounded-xl border-0 px-10 py-1.5 text-blue-950 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              {!!errors.msg && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex pr-3 pt-2">
                  <ExclamationCircleIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-red-500"
                  />
                </div>
              )}
            </div>
            {!!errors.msg && (
              <p id="msg-error" className="mt-2 text-sm text-red-600">
                {errors.msg?.message}
              </p>
            )}
          </div>
        </div>

        <button
          className="mt-5 flex w-full items-center justify-center gap-1 rounded-full bg-blue-950 py-4 font-semibold text-blue-50 shadow-xl"
          type="submit"
        >
          {
            isSubmitting ? (
            <>
              <PaperAirplaneIcon className="h-5 w-5 text-orange-500" />
              <span>Sending...</span>
            </>
          ) : 
          isSubmitSuccessful ? (
            <>
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span>Sent with success</span>
            </>
          ) : (
            <>
              <ArrowRightCircleIcon className="h-5 w-5 text-white" />
              <span>Send</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
