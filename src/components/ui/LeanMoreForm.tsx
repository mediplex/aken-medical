'use client';

import { learnMoreFormAction } from '@/actions';
import { cn } from '@/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { ReactNode } from 'react';
import React, { useActionState, useMemo } from 'react';
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaStethoscope,
  FaFlaskVial,
  FaSackDollar,
  FaBook,
  FaXmark,
  FaChevronLeft,
} from 'react-icons/fa6';
import { IconCheckbox } from './IconCheckBox';
import { TextInput } from './TextInput';

const LearnMoreForm: React.FC = () => {
  const searchParams = useSearchParams();
  const currentStep: number = parseInt(searchParams?.get('step') as string);

  const closeLink = useMemo((): string => {
    if (!searchParams) return '?';
    const params = new URLSearchParams(searchParams.toString());
    params.delete('form');
    params.delete('step');
    return `?${params.toString()}`;
  }, [searchParams]);

  const stepOneLink = useMemo((): string => {
    if (!searchParams) return '?';
    const params = new URLSearchParams(searchParams.toString());
    params.set('form', 'learn-more');
    params.set('step', '1');
    return `?${params.toString()}`;
  }, [searchParams]);

  const stepTwoLink = useMemo((): string => {
    if (!searchParams) return '?';
    const params = new URLSearchParams(searchParams.toString());
    params.set('form', 'learn-more');
    params.set('step', '2');
    return `?${params.toString()}`;
  }, [searchParams]);

  const [, submitAction] = useActionState(learnMoreFormAction, null);

  return (
    <form action={submitAction} className="flex flex-col justify-center">
      <header className="flex shrink-0 grow-0 items-center justify-between px-4 py-8">
        <Link
          href={stepOneLink}
          replace
          shallow
          className={cn('p-2" rounded-full', {
            'pointer-events-none': currentStep === 1,
            'opacity-0': currentStep === 1,
          })}
        >
          <FaChevronLeft className="size-5 text-black/30 transition-all duration-300 ease-in-out hover:scale-125 hover:text-teal-500" />
        </Link>
        <h2 className="text-3xl text-emerald-950/30">
          <span>Step&nbsp;</span>
          <span className="absolute font-mono after:font-mono after:text-2xl after:text-emerald-950/15 after:content-['/2']">
            {currentStep}
          </span>
        </h2>
        <Link href={closeLink} replace shallow className="rounded-full p-2">
          <FaXmark className="size-6 text-black/30 transition-all duration-300 ease-in-out hover:scale-125 hover:text-red-500" />
        </Link>
      </header>

      <Slider currentStep={currentStep}>
        {/* Slide 1 */}
        <Slide index={1} currentStep={currentStep}>
          <h3 className="mb-4 text-xl text-teal-950">
            Tell us a little be about yourself to personalize{' '}
            <strong>your report</strong>.
          </h3>
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
        </Slide>

        {/* Slide 2 */}
        <Slide index={2} currentStep={currentStep}>
          <h3 className="text-xl text-teal-950">
            Where do you want to receive the full report about the project?
          </h3>
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
        </Slide>
      </Slider>
      {/* {!!state?.error && <p className="text-red-500">{state.error}</p>} */}
      <Slider currentStep={currentStep}>
        <Slide index={1} currentStep={currentStep}>
          <Link
            // href={`?${new URLSearchParams({ form: 'learn-more', step: '2' })}`}
            href={stepTwoLink}
            shallow
            className="flex h-20 w-full items-center justify-center gap-2 rounded-full bg-teal-600 p-2 text-lg font-semibold text-white"
          >
            Next
          </Link>
        </Slide>
        <Slide currentStep={currentStep} index={2}>
          <button
            type="submit"
            className="flex h-20 w-full items-center justify-center gap-2 rounded-full bg-teal-600 p-2 text-lg font-semibold text-white"
          >
            <FaPaperPlane className="size-6" />
            Send
          </button>
        </Slide>
      </Slider>
      {/* <footer className="flex shrink-0 grow-0 items-center px-4 py-8">
        
      </footer> */}
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
    <div className="flex shrink-0 grow-0 overflow-hidden">
      <div
        className={cn(
          'flex shrink-0 grow-0 basis-full',
          'transition-all duration-300 ease-in',
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
        'px-4 py-4',
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
