'use client';
import type { ReactNode } from 'react';
import React, { createContext, useContext, useReducer } from 'react';

// Define the shape of the form state
interface StepperState {
  currentStep: number;
}

// Define the initial state
const initialState: StepperState = {
  currentStep: 0,
};

// Define action types
type Action = { type: 'NEXT_STEP' } | { type: 'PREVIOUS_STEP' };

// Create a reducer to handle state changes
const stepperReducer = (state: StepperState, action: Action): StepperState => {
  console.log('action', action);
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'PREVIOUS_STEP':
      return { ...state, currentStep: state.currentStep - 1 };
    default:
      return state;
  }
};

// Create the context
const StepperContext = createContext<{
  state: StepperState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Create a provider component
export const StepperProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(stepperReducer, initialState);

  return (
    <StepperContext.Provider value={{ state, dispatch }}>
      {children}
    </StepperContext.Provider>
  );
};

// Custom hook to use the form context
export const useStepperContext = (): {
  state: StepperState;
  dispatch: React.Dispatch<Action>;
} => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepperContext must be used within a StepperProvider');
  }
  return context;
};

const AskForm: React.FC = () => {
  const { dispatch } = useStepperContext();

  return (
    <StepperProvider>
      <form
        action={() => {
          console.log('Form submitted');
        }}
      >
        <Stepper steps={[<Step1 key="step 1" />, <Step2 key="step 2" />]} />

        <input type="submit" value="Submit" />
      </form>
      <div className="flex gap-5">
        <button onClick={() => dispatch({ type: 'NEXT_STEP' })}>Next</button>
        <button onClick={() => dispatch({ type: 'PREVIOUS_STEP' })}>
          Previous
        </button>
      </div>
    </StepperProvider>
  );
};

const Stepper: React.FC<{ steps: JSX.Element[] }> = ({
  steps = [<Step1 key="step_1" />, <Step2 key="step_2" />],
}) => {
  const { state } = useStepperContext();
  return (
    <>{React.cloneElement(steps[state.currentStep] as React.ReactElement)}</>
  );
};

const Step1: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2>Step 1</h2>
      <label htmlFor="name">Name</label>
      <input name="name" placeholder="Enter your name" type="text" />
    </div>
  );
};

const Step2: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2>Step 2</h2>
      <label htmlFor="email">Email</label>
      <input name="email" placeholder="Enter your email" type="text" />
    </div>
  );
};

export { AskForm };
