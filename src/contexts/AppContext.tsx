'use client';
// import { AskForm } from '@/components';
import type { ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';

export interface AskFormData {
  formName: string;
  step1: {
    name: string;
    email: string;
    scientist: boolean;
    medicalDoctor: boolean;
    investor: boolean;
    other: boolean;
  };
  step2: {
    proofOfConcept: boolean;
    usecase: boolean;
    financialData: boolean;
    leadership: boolean;
  };
}
export interface ModalData {
  isOpen: boolean;
}

interface AppState {
  askForm: AskFormData;
  modal: ModalData;
}

type AppAction =
  | { type: 'TOGGLE_MODAL' }
  | { type: 'FORM_CHANGE'; payload: AskFormData };

const initialState: AppState = {
  askForm: {
    formName: '',
    step1: {
      name: '',
      email: '',
      investor: false,
      medicalDoctor: false,
      other: false,
      scientist: false,
    },
    step2: {
      financialData: false,
      leadership: false,
      proofOfConcept: false,
      usecase: false,
    },
  },
  modal: {
    isOpen: false,
  },
};

const modalFormReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { ...state, modal: { isOpen: !state.modal.isOpen } };
    case 'FORM_CHANGE':
      return { ...state, askForm: { ...action.payload } };
    default:
      return state;
  }
};

const AppContext = createContext<
  | {
      state: AppState;
      dispatch: React.Dispatch<AppAction>;
    }
  | undefined
>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(modalFormReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} => {
  const context = useContext(AppContext);
  console.log(context?.state);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
