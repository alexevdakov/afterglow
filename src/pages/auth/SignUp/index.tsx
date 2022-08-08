import React from 'react';
import { Link } from 'react-router-dom';

import { SignUp } from 'modules/Auth/SignUp';
import { SplitScreen } from '@ui-kit/patterns/SpliScreen';

import { PageRoutes } from 'routes/routes';

export function SignUpPage() {
  return (
    <SplitScreen>
      <SignUp />
      <div className='mt-6 flex justify-center text-lg text-grey-100'>
        Already a Member?
        <Link
          to={PageRoutes.SignIn}
          className='ml-2 text-primary-500 hover:text-primary-600'
        >
          Sign in instead
        </Link>
      </div>
    </SplitScreen>
  );
}
