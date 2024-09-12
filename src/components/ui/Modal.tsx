import { type ReactNode } from 'react';

interface ModalData {
  showModal: boolean;
  children: ReactNode;
}

export const Modal: React.FC<ModalData> = ({ showModal = false, children }) => {
  return (
    <>
      {showModal && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-3xl`}
        >
          {children}
        </div>
      )}
    </>
  );
};
