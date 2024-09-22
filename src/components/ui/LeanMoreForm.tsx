'use client';

import { learnMoreFormAction } from '@/actions';
import { cn } from '@/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { HTMLInputTypeAttribute } from 'react';
import React, { useActionState } from 'react';
import {
  CloseIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  UserIcon,
} from './icons';

// const LearnMoreForm: React.FC<{
//   children: ReactNode;
// }> = (children)

const LearnMoreForm: React.FC = () => {
  const searchParams = useSearchParams();
  const step: string = searchParams?.get('step') || '1';

  const [state, submitAction, isPending] = useActionState(
    learnMoreFormAction,
    null
  );
  return (
    <form action={submitAction} className="flex flex-col gap-4 p-4">
      <div className="flex w-72 flex-col gap-4 overflow-hidden">
        <header className="flex h-8 shrink-0 grow-0 basis-full flex-row items-center justify-between">
          <Link
            href={`?${new URLSearchParams({ form: 'learn-more', step: '1' })}`}
            className={cn(
              'text-2xl font-thin text-emerald-950/50 transition-all duration-500 ease-in-out',
              {
                'pointer-events-none': step === '1',
                'opacity-0': step === '1',
              }
            )}
          >
            &lt;
          </Link>
          <h2 className="font-bold text-emerald-950/50">Step&nbsp;{step}/2</h2>
          <Link
            href={`/`}
            className="m-2 rounded-full transition-all duration-300 ease-in-out hover:scale-125"
          >
            <CloseIcon className="size-6 stroke-emerald-500/50 transition-all duration-300 ease-in-out hover:stroke-red-500" />
          </Link>
        </header>

        <main
          className={cn(
            `flex shrink-0 grow-0 basis-full transition-all duration-300 ease-in @container/slider`,
            {
              '-translate-x-full': step === '2',
            }
          )}
        >
          <fieldset
            className={cn(
              `flex shrink-0 grow-0 basis-full flex-col gap-2 opacity-0 transition-all duration-500 ease-in-out`,
              {
                'opacity-100': step === '1',
                'pointer-events-auto': step === '1',
              }
            )}
          >
            <legend className="font-bold text-emerald-950">
              Please select what do you want to learn about
            </legend>

            <div className="flex items-center gap-1">
              <input type="checkbox" name="usecase" />
              <label htmlFor="usecase">Usecase</label>
            </div>

            <Link
              href={`?${new URLSearchParams({ form: 'learn-more', step: '2' })}`}
              className="flex w-full items-center justify-center bg-teal-600 p-2 font-bold text-white"
            >
              Next
            </Link>
          </fieldset>
          <fieldset
            className={cn(
              `flex shrink-0 grow-0 basis-full flex-col gap-2 opacity-0 transition-all duration-500 ease-in-out`,
              {
                'opacity-100': step === '2',
                'pointer-events-auto': step === '2',
              }
            )}
          >
            <legend className="font-bold text-emerald-950">
              Where do you want to receive the full report about the project?
            </legend>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              Icon={EnvelopeIcon}
            />
            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="Enter your name"
              Icon={UserIcon}
            />
            <button
              type="submit"
              className="w-full bg-teal-600 p-2 font-bold text-white"
              disabled={isPending}
            >
              submit
            </button>
          </fieldset>
        </main>
      </div>
      {!!state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
};

// const FormHeader: React.FC<{ children: ReactNode }> = (children) => {
//   return (

//   );
// };

// const FormFooter: React.FC<{ children: ReactNode }> = (children) => {
//   return (

//   )
// }

const Input: React.FC<{
  label: string;
  type: HTMLInputTypeAttribute | 'textarea';
  name: string;
  placeholder: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  error?: { message: string } | null;
}> = ({ label, type, name, Icon, error, placeholder }) => {
  return (
    <>
      {type !== 'textarea' ? (
        <div className="flex flex-col items-start">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-blue-950"
          >
            {label}
          </label>
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon className="size-6 fill-none stroke-blue-950/30" />
            </div>
            <input
              name={name}
              placeholder={placeholder}
              type={type}
              className="block w-full rounded-full border-0 px-10 py-1.5 text-blue-950 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            />
            {!!error && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon className="size-6 fill-red-500" />
              </div>
            )}
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
            className="block text-sm font-medium leading-6 text-blue-950"
          >
            Message
          </label>
          <div className="relative mt-2 w-full rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex pl-3 pt-2">
              <Icon
                aria-hidden="true"
                className="size-6 fill-none stroke-blue-950/30"
              />
            </div>
            <textarea
              id="msg"
              placeholder="Tell us how we can help you"
              rows={4}
              className="block w-full rounded-xl border-0 px-10 py-1.5 text-blue-950 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            />
            {!!error && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex pr-3 pt-2">
                <ExclamationCircleIcon
                  aria-hidden="true"
                  className="size-6 fill-red-500"
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
