'use client';

import { learnMoreFormAction } from '@/actions';
import { cn } from '@/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { ReactNode } from 'react';
import React, { useActionState } from 'react';
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaStethoscope,
  FaFlaskVial,
  FaSackDollar,
  FaBook,
} from 'react-icons/fa6';
import { IconCheckbox } from './IconCheckBox';
import { TextInput } from './TextInput';

const LearnMoreForm: React.FC = () => {
  const searchParams = useSearchParams();
  const currentStep: number = parseInt(searchParams?.get('step') as string);
  //router.replace('/');

  const [state, submitAction] = useActionState(learnMoreFormAction, null);

  return (
    <form action={submitAction} className="flex flex-1">
      {/* stepper container */}
      <Slider currentStep={currentStep}>
        {/* Slide 1 */}
        <Slide index={1} currentStep={currentStep}>
          <h2 className="text-3xl">Step 1</h2>

          <p className="text-xl text-teal-950">
            Tell us a little be about yourself to personalize{' '}
            <strong>your report</strong>.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <IconCheckbox Icon={FaStethoscope} name="doctor" label="Doctor" />
            <IconCheckbox
              Icon={FaFlaskVial}
              name="scientist"
              label="Scientist"
            />
            <IconCheckbox
              Icon={FaSackDollar}
              name="investor"
              label="investor"
            />
            <IconCheckbox Icon={FaBook} name="other" label="Other" />
          </div>

          <footer>
            <Link
              href={`?${new URLSearchParams({ form: 'learn-more', step: '2' })}`}
              className="flex h-20 w-full flex-row items-center justify-center gap-2 rounded-full bg-teal-600 p-2 text-lg font-semibold text-white shadow-md"
            >
              Next
            </Link>
          </footer>
        </Slide>

        {/* Slide 2 */}
        <Slide index={2} currentStep={currentStep}>
          <h2 className="text-3xl">Step 2</h2>
          <p className="text-xl text-teal-950">
            Where do you want to receive the full report about the project?
          </p>
          <TextInput
            label="Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            Icon={FaUser}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            Icon={FaEnvelope}
          />
          <button
            type="submit"
            className="flex h-20 w-full flex-row items-center justify-center gap-2 rounded-full bg-teal-600 p-2 text-lg font-semibold text-white shadow-xl"
            // disabled={isPending}
          >
            <FaPaperPlane className="size-4" />
            <span>Send it now</span>
          </button>
          <Link
            href={`?${new URLSearchParams({ form: 'learn-more', step: '1' })}`}
            className={cn(
              'flex w-full items-center justify-center text-teal-500/80 underline transition-all duration-300 ease-out hover:text-teal-500',
              {
                'pointer-events-none': currentStep === 1,
                'opacity-0': currentStep === 1,
              }
            )}
          >
            Back
          </Link>
        </Slide>
      </Slider>
      {!!state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
};

const Slider: React.FC<{
  currentStep: number;
  children: ReactNode;
}> = ({ currentStep, children }) => {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 2) {
    console.warn('Slider component can only have up to 2 children.');
    childrenArray.length = 2; // Limit the number of children to 2
  }

  return (
    <div className="flex flex-1 overflow-hidden">
      <div
        className={cn(
          `flex shrink-0 grow-0 basis-full transition-all duration-300 ease-in`,
          {
            '-translate-x-full': currentStep === 2,
          }
        )}
      >
        {childrenArray}
      </div>
    </div>
  );
};

const Slide: React.FC<{
  currentStep: number;
  index: number;
  children: ReactNode;
}> = ({ currentStep, index, children }) => {
  return (
    <section
      className={cn(
        `shrink-0 grow-0 basis-full flex-col opacity-0 transition-all duration-500 ease-in-out`,
        {
          'flex opacity-100': currentStep === index,
          'pointer-events-auto': currentStep === index,
        }
      )}
    >
      {children}
    </section>
  );
};

export { LearnMoreForm };
