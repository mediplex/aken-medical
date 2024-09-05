'use client';
import type { ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';

interface AppState {
  isOpen: boolean;
}

type AppAction = { type: 'TOGGLE_MODAL' };

const initialState: AppState = {
  isOpen: false,
};

const modalFormReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { ...state, isOpen: !state.isOpen };
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
