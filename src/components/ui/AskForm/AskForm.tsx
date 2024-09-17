'use client';

import { useState } from 'react';

const AskForm: React.FC = () => {
  const [isLastStep, setIsLastStep] = useState<boolean>(false);

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <div className="relative h-[80vh] w-screen">
        <div
          className={`relative flex h-full w-[200vw] transition-all duration-300 ease-in @container/Slider ${isLastStep ? '-translate-x-[100vw]' : ''}`}
        >
          <div
            className={`trasistion-all relative flex h-full w-screen items-center justify-center bg-amber-500 duration-700 ease-in @container/Step1 ${!isLastStep ? 'opacity-100' : 'opacity-0'}`}
          >
            <h2 className="text-9xl text-white">Step 1</h2>
          </div>

          <div
            className={`trasistion-all relative flex h-full w-screen items-center justify-center bg-emerald-500 duration-700 ease-in @container/Step2 ${isLastStep ? 'opacity-100' : 'opacity-0'}`}
          >
            <h2 className="text-9xl text-white">Step 2</h2>
          </div>
        </div>
        <button
          className="rounded-full bg-gray-300 p-2"
          onClick={() => setIsLastStep(!isLastStep)}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export { AskForm };
