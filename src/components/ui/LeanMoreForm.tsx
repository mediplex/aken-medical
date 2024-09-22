'use client';

import { learnMoreFormAction } from '@/actions';
import { cn } from '@/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { HTMLInputTypeAttribute } from 'react';
import React, { useActionState } from 'react';
import type { IconType } from 'react-icons';
import {
  FaEnvelope as EnvelopeIcon,
  FaCircleExclamation as ExclamationCircleIcon,
  FaUser as UserIcon,
  FaPaperPlane,
  FaStethoscope,
  FaCheck,
  FaFlaskVial,
  FaSackDollar,
  FaBook,
} from 'react-icons/fa6';

const LearnMoreForm: React.FC = () => {
  const searchParams = useSearchParams();
  const step: string = searchParams?.get('step') || '1';

  const [state, submitAction, isPending] = useActionState(
    learnMoreFormAction,
    null
  );

  return (
    <form
      action={submitAction}
      className="flex w-full flex-col gap-4 p-2 shadow-none sm:max-w-lg"
    >
      <div className="flex w-full flex-col overflow-hidden">
        <div
          className={cn(
            `flex shrink-0 grow-0 basis-full transition-all duration-300 ease-in @container/slider`,
            {
              '-translate-x-full': step === '2',
            }
          )}
        >
          <Step1 step={step} />
          <Step2 step={step} isPending={isPending} />
        </div>
      </div>
      {!!state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
};

const Step1: React.FC<{ step: string }> = ({ step }) => {
  return (
    <section
      className={cn(
        `flex shrink-0 grow-0 basis-full flex-col gap-2 p-2 opacity-0 transition-all duration-500 ease-in-out`,
        {
          'opacity-100': step === '1',
          'pointer-events-auto': step === '1',
        }
      )}
    >
      <hgroup className="mb-8">
        <h2 className="text-3xl">Step 1</h2>
        <p className="text-lg text-teal-950">
          Select what do you want to learn about:
        </p>
      </hgroup>

      <div className="flex items-center gap-1">
        <input type="checkbox" id="usecase" name="usecase" className="peer" />
        <label htmlFor="usecase">Usecase</label>
      </div>

      <Link
        href={`?${new URLSearchParams({ form: 'learn-more', step: '2' })}`}
        className="flex w-full items-center justify-center bg-teal-500 p-2 font-bold text-white"
      >
        Next
      </Link>
    </section>
  );
};

const Step2: React.FC<{ step: string; isPending: boolean }> = ({
  step,
  isPending,
}) => {
  return (
    <section
      className={cn(
        `flex shrink-0 grow-0 basis-full flex-col gap-12 p-2 opacity-0 transition-all duration-500 ease-in-out`,
        {
          'opacity-100': step === '2',
          'pointer-events-auto': step === '2',
        }
      )}
    >
      <hgroup className="flex flex-col gap-0">
        <h2 className="text-3xl">Step 2</h2>
      </hgroup>
      <fieldset className="flex flex-col gap-4">
        <h3 className="text-xl text-teal-950">
          Where do you want to receive the full report about the project?
        </h3>
        <Input
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your name"
          Icon={UserIcon}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          Icon={EnvelopeIcon}
        />
      </fieldset>

      <Qualification />

      <fieldset className="flex flex-col gap-4">
        <button
          type="submit"
          className="flex h-16 w-full flex-row items-center justify-center gap-2 rounded-full bg-teal-600 p-2 text-lg font-semibold text-white shadow-xl"
          disabled={isPending}
        >
          <FaPaperPlane className="size-4" />
          <span>Send it now</span>
        </button>
        <Link
          href={`?${new URLSearchParams({ form: 'learn-more', step: '1' })}`}
          className={cn(
            'flex w-full items-center justify-center gap-1 text-teal-500/80 underline transition-all duration-300 ease-out hover:text-teal-500',
            {
              'pointer-events-none': step === '1',
              'opacity-0': step === '1',
            }
          )}
        >
          {/* <FaChevronLeft className="size-4" /> */}
          <span>Back</span>
        </Link>
      </fieldset>
    </section>
  );
};

const Qualification: React.FC = () => {
  return (
    <fieldset className="flex flex-col gap-4">
      <h3 className="text-xl text-teal-950">
        Tell us a little be about yourself to personalize your report.
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <label
          htmlFor="doctor"
          className="flex h-16 items-center justify-between gap-4 rounded-2xl p-3 text-teal-950 ring-1 ring-teal-950/50 has-[:checked]:bg-teal-500/10 has-[:checked]:ring-teal-500"
        >
          <input
            type="checkbox"
            name="doctor"
            id="doctor"
            className="peer hidden"
          />
          <div className="flex gap-2">
            <FaStethoscope className="size-6" />
            <p className="">Doctor</p>
          </div>
          <FaCheck className="size-6 peer-checked:text-teal-500" />
        </label>

        <label
          htmlFor="scientist"
          className="flex h-16 items-center justify-between gap-4 rounded-2xl p-3 text-teal-950 ring-1 ring-teal-950/50 has-[:checked]:bg-teal-500/10 has-[:checked]:ring-teal-500"
        >
          <input
            type="checkbox"
            name="scientist"
            id="scientist"
            className="peer hidden"
          />
          <div className="flex gap-2">
            <FaFlaskVial className="size-6" />
            <p className="">Scientist</p>
          </div>
          <FaCheck className="size-6 peer-checked:text-teal-500" />
        </label>

        <label
          htmlFor="investor"
          className="flex h-16 items-center justify-between gap-4 rounded-2xl p-3 text-teal-950 ring-1 ring-teal-950/50 has-[:checked]:bg-teal-500/10 has-[:checked]:ring-teal-500"
        >
          <input
            type="checkbox"
            name="investor"
            id="investor"
            className="peer hidden"
          />
          <div className="flex gap-2">
            <FaSackDollar className="size-6" />
            <p className="">Investor</p>
          </div>
          <FaCheck className="size-6 peer-checked:text-teal-500" />
        </label>

        <label
          htmlFor="other"
          className="flex h-16 items-center justify-between gap-4 rounded-2xl p-3 text-teal-950 ring-1 ring-teal-950/50 has-[:checked]:bg-teal-500/10 has-[:checked]:ring-teal-500"
        >
          <input
            type="checkbox"
            name="other"
            id="other"
            className="peer hidden"
          />
          <div className="flex gap-2">
            <FaBook className="size-6" />
            <p className="">Other</p>
          </div>
          <FaCheck className="size-6 peer-checked:text-teal-500" />
        </label>
      </div>
    </fieldset>
  );
};

const Input: React.FC<{
  label: string;
  type: HTMLInputTypeAttribute | 'textarea';
  name: string;
  placeholder: string;
  Icon: IconType;
  error?: { message: string } | null;
}> = ({ label, type, name, Icon, error, placeholder }) => {
  return (
    <>
      {type !== 'textarea' ? (
        <div className="flex flex-col items-start gap-1">
          <label
            htmlFor={name}
            className="text-teal-950 after:pointer-events-none after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            {label}
          </label>
          <div className="flex w-full items-center gap-1 rounded-full px-3 py-1 ring-1 ring-teal-950/50 has-[:focus]:ring-2 has-[:focus]:ring-teal-500">
            <Icon className="size-5 text-teal-950/30" />
            <input
              id={name}
              name={name}
              placeholder={placeholder}
              type={type}
              className="flex-1 border-0 text-teal-950 placeholder:text-teal-950/50 focus:ring-0"
            />
            {/* {!!error && ( */}
            {<ExclamationCircleIcon className="size-6 text-red-500" />}
          </div>
          {!!error && (
            <p id="name-error" className="mt-2 text-sm text-red-500">
              {error?.message}
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-start">
          <label
            htmlFor="msg"
            className="block text-sm font-medium leading-6 text-teal-950"
          >
            {label}
          </label>
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex pl-3 pt-2">
              <Icon
                aria-hidden="true"
                className="size-6 fill-none text-teal-950/30"
              />
            </div>
            <textarea
              name={name}
              id={name}
              placeholder="Tell us how we can help you"
              rows={4}
              className="block w-full rounded-xl border-0 px-10 py-1.5 text-teal-950 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            />
            {!!error && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex pr-3 pt-2">
                <ExclamationCircleIcon
                  aria-hidden="true"
                  className="size-6 text-red-500"
                />
              </div>
            )}
          </div>
          {!!error && (
            <p id="msg-error" className="mt-2 text-sm text-red-600">
              {error.message}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export { LearnMoreForm };
