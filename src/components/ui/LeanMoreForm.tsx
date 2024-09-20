'use client';

import { learnMoreFormAction } from '@/actions';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
// import type { ReactNode } from 'react';
import { useActionState } from 'react';

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
            className="font-bold text-emerald-950/50"
          >
            &lt;
          </Link>
          <h2 className="font-bold text-emerald-950/50">Step&nbsp;{step}/2</h2>
          <Link
            href={`/`}
            className="flex items-center justify-center p-2 font-bold text-emerald-950/50"
          >
            x
          </Link>
        </header>

        <main
          className={`flex shrink-0 grow-0 basis-full ${step === '2' && '-translate-x-full'} transition-all duration-150 ease-in @container/slider`}
        >
          <fieldset
            className={`flex shrink-0 grow-0 basis-full flex-col gap-2 *:rounded-3xl ${step === '1' ? 'opacity-100' : 'opacity-100'} ${step === '1' ? 'pointer-events-auto' : 'pointer-events-none'} transition-all duration-500 ease-in-out`}
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
            className={`flex shrink-0 grow-0 basis-full flex-col gap-2 *:rounded-3xl ${step === '2' ? 'opacity-100' : 'opacity-100'} ${step === '2' ? 'pointer-events-auto' : 'pointer-events-none'} transition-all duration-500 ease-in-out`}
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
