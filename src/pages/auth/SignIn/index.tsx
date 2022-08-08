import React from 'react';
import { Link } from 'react-router-dom';

import { SignIn } from 'modules/Auth/SignIn';
import { SplitScreen } from '@ui-kit/patterns/SpliScreen';

import { PageRoutes } from 'routes/routes';

export function SignInPage() {
  return (
    <SplitScreen>
      <SignIn />
      <div className='mt-6 flex justify-center text-lg'>
        <Link
          to={PageRoutes.SignUp}
          className='ml-2 text-primary-500 hover:text-primary-600'
        >
          Create account
        </Link>
      </div>
    </SplitScreen>
  );
}
