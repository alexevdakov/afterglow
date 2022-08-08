import React, { ReactNode } from 'react';

interface FormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: ReactNode;
}

export function Form({ onSubmit, children }: FormProps) {
  return (
    <div className='mt-10'>
      <form className='space-y-6 not-first-child:space-y-6' onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}
