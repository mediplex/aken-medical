'use client';
// import { AskForm } from '@/components';
import type { ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';

export interface AskFormData {
  formName: string;
  // steps: [
  //   {
  //     name: string;
  //     email: string;
  //     scientist: boolean;
  //     medicalDoctor: boolean;
  //     investor: boolean;
  //     other: boolean;
  //   },
  //   {
  //     proofOfConcept: boolean;
  //     usecase: boolean;
  //     financialData: boolean;
  //     leadership: boolean;
  //   },
  // ];
}
export interface ModalData {
  isOpen: boolean;
}

interface AppState {
  // askForm: AskFormData;
  modal: ModalData;
}

type AppAction = { type: 'TOGGLE_MODAL' } | { type: 'STEP_CHANGE' };
// | { type: 'FORM_CHANGE'; payload: AskFormData }
// | { type: 'FORM_SUBMIT'; payload: AskFormData }
// | { type: 'FORM_SUCCESS' };

const initialState: AppState = {
  // askForm: {
  //   formName: '',
  // steps: [
  //   {
  //     name: '',
  //     email: '',
  //     scientist: false,
  //     medicalDoctor: false,
  //     investor: false,
  //     other: false,
  //   },
  //   {
  //     proofOfConcept: false,
  //     usecase: false,
  //     financialData: false,
  //     leadership: false,
  //   },
  // ],
  // },
  modal: {
    isOpen: false,
  },
};

const AppReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { ...state, modal: { isOpen: !state.modal.isOpen } };
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
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
