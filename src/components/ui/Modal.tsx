'use client';
import { useAppContext } from '@/contexts';
import { type ReactNode } from 'react';

interface ModalData {
  children: ReactNode;
}

export const Modal: React.FC<ModalData> = ({ children }) => {
  const { state, dispatch } = useAppContext();
  const handleClick = (): void => {
    dispatch({ type: 'TOGGLE_MODAL' as const });
  };
  return (
    <>
      {state.modal.isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-3xl">
          <div
            className="absolute right-0 top-0 z-0 m-4 flex size-8 items-center justify-center rounded-full stroke-blue-950 p-2 shadow-2xl shadow-blue-950 ring-1 ring-blue-950"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          {children}
        </div>
      )}
    </>
  );
};
