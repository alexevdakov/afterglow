import React, { useId } from 'react';

import { Form, Field, Button } from '@ui-kit/components';

import { fieldsData } from './constants';

interface FormValues {
  email: string;
  password: string;
}

export function SignIn() {
  const id = useId();

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <>
      <h2>Sign in to your account</h2>
      <Form<FormValues> onSubmit={onSubmit}>
        {({ register }) => (
          <>
            {fieldsData.map(({ name, type, placeholder }) => (
              <Field
                {...register(name)}
                id={`${id}-${name}`}
                key={`form-field-${name}`}
                name={name}
                type={type}
                placeholder={placeholder}
                transparent
              />
            ))}
            <Button type='submit' title='Sign in' />
          </>
        )}
      </Form>
    </>
  );
}
