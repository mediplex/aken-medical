'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect, useMemo, useRef } from 'react';

import React from 'react';
let render = 0;

const Dialog: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const searchParams = useSearchParams();

  const router = useRouter();
  render++;
  console.log('render', render);

  const closeLink = useMemo((): string => {
    if (!searchParams) return '?';

    const params = new URLSearchParams(searchParams.toString());
    params.delete('form');
    params.delete('step');
    return `?${params.toString()}`;
  }, [searchParams]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (searchParams?.has('form')) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [searchParams]);

  return (
    <dialog
      ref={dialogRef}
      className="pointer-events-none flex w-full min-w-96 translate-y-full scale-0 select-none rounded-3xl transition-all duration-300 backdrop:backdrop-blur-sm open:pointer-events-auto open:translate-y-0 open:scale-100 open:opacity-100 lg:max-w-lg"
      onClose={() => router.replace(closeLink)}
    >
      {children}
    </dialog>
  );
};

export default Dialog;
export { Dialog };
