import React, { useId } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Field, Button } from '@ui-kit/components';

import { useSignUpRequest } from './useSignUpRequest';
import { fieldsData } from './constatns';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUp() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { signUpRequest, isLoading } = useSignUpRequest();
  const id = useId();

  const onSubmit = ({ email, password }: FormValues) =>
    signUpRequest.mutate({ email, password });

  return (
    <>
      <h2>Create new account</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fieldsData.map(({ name, type, placeholder }) => (
          <div key={`form-field-${name}`}>
            <Field
              {...register(name)}
              id={`${id}-${name}`}
              name={name}
              type={type}
              placeholder={placeholder}
              transparent
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        ))}
        <Button type='submit' title='Register' />
      </Form>
    </>
  );
}
