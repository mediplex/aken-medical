'use client';

import type { FormEventHandler } from 'react';
// import { useRef } from 'react';

export const AskForm: React.FC = () => {
  // const formRef = useRef();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="@container:AskForm">
      <form onSubmit={handleSubmit} className="flex"></form>
    </div>
  );
};
