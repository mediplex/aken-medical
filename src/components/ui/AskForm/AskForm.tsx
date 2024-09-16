'use client';

import { useState } from 'react';

const pagination = [0, 1];

const AskForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  console.log('currentStep', currentStep);

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
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <div className="relative h-[80vh] w-screen">
        <div
          className={`relative flex h-full w-[200vw] transition-all duration-300 ease-in @container/Slider ${currentStep === 1 ? '-translate-x-[100vw]' : ''}`}
        >
          <div
            className={`trasistion-all relative flex h-full w-screen items-center justify-center bg-amber-500 duration-700 ease-in @container/Step1 ${currentStep === 0 ? 'opacity-100' : 'opacity-0'}`}
          >
            <h2 className="text-9xl text-white">Step 1</h2>
            <button
              className="w-20 rounded-full bg-gray-300 p-2"
              onClick={handleNextStep}
              disabled={currentStep === pagination.length - 1}
            >
              Next
            </button>
          </div>

          <div
            className={`trasistion-all relative flex h-full w-screen items-center justify-center bg-emerald-500 duration-700 ease-in @container/Step2 ${currentStep === 1 ? 'opacity-100' : 'opacity-0'}`}
          >
            <h2 className="text-9xl text-white">Step 2</h2>
            <button
              className="rounded-full bg-gray-300 p-2"
              onClick={handlePreviousStep}
              disabled={currentStep === 0}
            >
              Previous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AskForm };
