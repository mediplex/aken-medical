import { ContactForm } from '../ContactForm';

interface ModalData {
  showModal: boolean;
}

export const Modal: React.FC<ModalData> = ({ showModal = false }) => {
  return (
    <>
      {showModal && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-3xl`}
        >
          <ContactForm />
        </div>
      )}
    </>
  );
};
