import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from 'react';

interface FieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  transparent?: boolean;
}

export const Field = forwardRef<HTMLInputElement, Partial<FieldProps>>(
  ({ id, placeholder, name, type, transparent = false, ...props }, ref) => {
    return (
      <input
        {...props}
        id={id}
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${
          transparent ? `bg-transparent` : ``
        } appearance-none block w-full px-3 py-2 placeholder:text-grey-500 text-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm`}
      />
    );
  }
);
