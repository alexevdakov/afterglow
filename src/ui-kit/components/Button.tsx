import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <div>
      <button
        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-primary-400 hover:bg-primary-500 focus:outline-none'
        {...props}
      >
        {title}
      </button>
    </div>
  );
}
