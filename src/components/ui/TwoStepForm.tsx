'use client';

import { cn } from '@/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { ReactNode } from 'react';
import React, { useActionState, useMemo } from 'react';
import { FaPaperPlane, FaXmark, FaChevronLeft } from 'react-icons/fa6';

const TwoStepForm: React.FC<{
  children: ReactNode;
  form: string;
  action: (state: unknown, payload: FormData) => Promise<unknown> | unknown;
}> = ({ children, form, action }) => {
  const searchParams = useSearchParams();
  const currentStep: number =
    parseInt(searchParams?.get('step') as string) || 1;

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
    params.set('form', form);
    params.set('step', '1');
    return `?${params.toString()}`;
  }, [form, searchParams]);

  const stepTwoLink = useMemo((): string => {
    if (!searchParams) return '?';
    const params = new URLSearchParams(searchParams.toString());
    params.set('form', form);
    params.set('step', '2');
    return `?${params.toString()}`;
  }, [form, searchParams]);

  const [state, formAction] = useActionState(action, null);
  console.log(state);

  return (
    <form action={formAction} className="flex w-full flex-col justify-center">
      <input type="hidden" name={form} readOnly required defaultValue={form} />
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
        {children}
      </Slider>
      <Slider currentStep={currentStep}>
        <Slide index={1} currentStep={currentStep}>
          <Link
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
    <div className="flex w-full shrink-0 grow-0 overflow-hidden">
      <div
        className={cn(
          'flex w-full shrink-0 grow-0',
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
        'gap-4',
        'px-4 py-4',
        `w-full shrink-0 grow-0 flex-col opacity-0 transition-all duration-500 ease-in-out`,
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

export { TwoStepForm, Slide as Step };
