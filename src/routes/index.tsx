import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageRoutes } from './routes';

import { SignUpPage } from 'pages/auth/SignUp';
import { SignInPage } from 'pages/auth/SignIn';

export function App() {
  return (
    <Routes>
      <Route path={PageRoutes.SignUp} element={<SignUpPage />} />
      <Route path={PageRoutes.SignIn} element={<SignInPage />} />
    </Routes>
  );
}
