'use client';

import { useState, useActionState } from 'react';
import { submit } from './action';

const pagination = [0, 1];

const AskForm: React.FC = () => {
  const [state, action, isPending] = useActionState(submit, undefined);
  const [currentStep, setCurrentStep] = useState(0);

  console.log('currentStep', currentStep);
  console.log('state', state);

  const handleNextStep = (): void => {
    if (currentStep < pagination.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = (): void => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <form action={action} className="h-screen w-screen @container/form">
      <div
        className={`relative flex h-full w-[${pagination.length * 100}vw] transition-all duration-300 ease-in -translate-x-[${currentStep * 100}vw]`}
      >
        <div
          className={`trasistion-all relative flex h-full w-full items-center justify-center bg-amber-500 duration-700 ease-in @container/Step1 ${currentStep === 0 ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-9xl text-white">Step 1</h2>
        </div>

        <div
          className={`trasistion-all relative flex h-full w-full items-center justify-center bg-emerald-500 duration-700 ease-in @container/Step1 ${currentStep === 1 ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-9xl text-white">Step 2</h2>
        </div>
      </div>

      <div className="absolute bottom-24 flex w-full justify-between px-4">
        <button
          className="rounded-full bg-gray-300 p-2"
          onClick={handlePreviousStep}
          disabled={currentStep === 0 || isPending}
        >
          Previous
        </button>
        <button
          className="w-20 rounded-full bg-gray-300 p-2"
          onClick={handleNextStep}
          disabled={currentStep === pagination.length - 1 || isPending}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export { AskForm };
