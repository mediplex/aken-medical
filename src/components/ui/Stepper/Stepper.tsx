import type { ReactElement } from 'react';
import React from 'react';
import { useStepperContext } from './StepperContext';

const Stepper: React.FC<{ steps: ReactElement[] }> = ({ steps }) => {
  const {
    state: { currentStep },
    dispatch,
  } = useStepperContext();

  const previousStep = (): void => {
    if (currentStep === 0) return;
    dispatch({ type: 'PREVIOUS_STEP' });
  };
  const nextStep = (): void => {
    if (currentStep === steps.length - 1) return;
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <>
      <div className="relative h-[80vh] w-screen">
        <div
          className={`relative flex h-full w-[${steps.length * 100}vw] transition-all duration-300 ease-in -translate-x-[${currentStep * 100}vw]`}
        >
          {steps.map((Step, index) => (
            <div
              key={index}
              className={`trasistion-all relative flex h-full w-full items-center justify-center duration-700 ease-in ${currentStep === index ? 'opacity-100' : 'opacity-0'}`}
            >
              {React.cloneElement(Step)}
            </div>
          ))}
        </div>

        <div className="absolute bottom-24 flex w-full justify-between px-4">
          <button
            className="rounded-full bg-gray-300 p-2"
            onClick={previousStep}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            className="w-20 rounded-full bg-gray-300 p-2"
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export { Stepper };
