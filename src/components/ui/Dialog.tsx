'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

// import Link from 'next/link';
import React from 'react';
// import { FaXmark as CloseIcon } from 'react-icons/fa6';

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
    if (!searchParams) return;
    const params = new URLSearchParams(searchParams.toString());
    params.delete('form');
    params.delete('step');
    router.replace(`?${params.toString()}`);
  };

  return (
    <dialog
      ref={dialogRef}
      className="pointer-events-none absolute inset-0 block w-80 translate-y-full scale-0 select-none rounded-3xl bg-teal-100 p-0 opacity-0 transition-all duration-200 backdrop:backdrop-blur-sm open:pointer-events-auto open:translate-y-0 open:scale-100 open:opacity-100"
      onClose={handleClose}
    >
      {/* <Link href={`/`} className="">
        <CloseIcon className="size-6 flex-1 transition-all duration-300 ease-in-out hover:scale-125 hover:text-red-500 hover:opacity-100" />
      </Link> */}
      {children}
    </dialog>
  );
};

export { Dialog };
