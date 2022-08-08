import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  AuthErrorCodes,
} from 'firebase/auth';

import app from './firebase';

const auth = getAuth(app);

type AuthErrorType = typeof AuthErrorCodes;

export interface SignUpResponse {
  data:
    | {
        token: string;
        refreshToken: string;
      }
    | Record<string, string>;
  error: AuthErrorType | null;
}

export function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<SignUpResponse> {
  const response: SignUpResponse = {
    data: {},
    error: null,
  };

  return createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }: UserCredential) => {
      response.data.refreshToken = user.refreshToken;

      return user.getIdToken();
    })
    .then((token) => {
      response.data.token = token;

      return response;
    })
    .catch((error) => {
      response.error = error.code as typeof AuthErrorCodes;

      return response;
    });
}
