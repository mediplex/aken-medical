'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

const Dialog: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (dialogRef.current) {
      const open: boolean = searchParams?.get('form') === 'learn-more';
      if (open) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [searchParams]);

  const handleClose = (): void => {
    // Remove the 'form' query parameter from the URL
    if (!searchParams) return;
    const params = new URLSearchParams(searchParams.toString());
    params.delete('form');
    params.delete('step');
    router.replace(`?${params.toString()}`);
  };

  return (
    <dialog
      ref={dialogRef}
      className={`pointer-events-none inset-0 block w-80 translate-y-full scale-0 rounded-3xl bg-teal-200 p-0 opacity-0 transition-all duration-150 @container/dialog backdrop:backdrop-blur-sm open:pointer-events-auto open:translate-y-0 open:scale-100 open:opacity-100`}
      onClose={handleClose}
    >
      {children}
    </dialog>
  );
};

export { Dialog };
