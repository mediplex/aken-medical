'use client';
import type { ReactNode } from 'react';
import React, { createContext, useReducer, useContext } from 'react';

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
const StepperProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(stepperReducer, initialState);

  return (
    <StepperContext.Provider value={{ state, dispatch }}>
      {children}
    </StepperContext.Provider>
  );
};

// Custom hook to use the form context
const useStepperContext = (): {
  state: StepperState;
  dispatch: React.Dispatch<Action>;
} => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepperContext must be used within a StepperProvider');
  }
  return context;
};

export { useStepperContext, StepperProvider };
