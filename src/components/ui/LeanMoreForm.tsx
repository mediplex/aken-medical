'use client';

import { learnMoreFormAction } from '@/actions';
import { cn } from '@/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
// import type { ReactNode } from 'react';
import { useActionState } from 'react';
import { CloseIcon } from './icons';

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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              title="Email"
              placeholder="Enter your email"
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

export { LearnMoreForm };
