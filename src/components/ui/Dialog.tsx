'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

import Link from 'next/link';
import React from 'react';
import { FaXmark as CloseIcon } from 'react-icons/fa6';

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
      className="rounded-xltransition-all pointer-events-none flex w-full min-w-96 translate-y-full scale-0 select-none items-center justify-center rounded-3xl duration-1000 open:pointer-events-auto open:translate-y-0 open:scale-100 open:opacity-100 sm:max-w-3xl"
      onClose={handleClose}
    >
      <Link
        href={`/`}
        className="fixed right-0 top-0 z-10 m-2 rounded-full p-2"
      >
        <CloseIcon className="size-6 flex-1 text-black/30 transition-all duration-300 ease-in-out hover:scale-125 hover:text-red-500" />
      </Link>
      {children}
    </dialog>
  );
};

export { Dialog };
