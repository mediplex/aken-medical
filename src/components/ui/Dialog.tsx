'use client';
import { useSearchParams } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

import React from 'react';

const Dialog: React.FC<{
  id: string;
  children: ReactNode;
}> = ({ children, id }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (dialogRef.current) {
      const open: boolean = searchParams?.get('form') === id;
      if (open) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [id, searchParams]);

  return (
    <dialog
      ref={dialogRef}
      className="pointer-events-none flex min-w-96 translate-y-full scale-0 select-none rounded-3xl transition-all duration-300 backdrop:backdrop-blur-sm open:pointer-events-auto open:translate-y-0 open:scale-100 open:opacity-100 sm:max-w-lg"
    >
      {children}
    </dialog>
  );
};

export { Dialog };
