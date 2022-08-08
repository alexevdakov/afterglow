import { useMutation } from 'react-query';

import { signUp } from 'services/authService';

export function useSignUpRequest() {
  const signUpRequest = useMutation(
    '/signUp',
    ({ email, password }: { email: string; password: string }) =>
      signUp({ email, password })
  );

  const { data, isLoading } = signUpRequest;

  // TODO: test for error
  console.log('data: ', data?.data);
  console.log('error: ', data?.error);

  return { signUpRequest, isLoading };
}
