import React, { createContext, useState, ReactNode } from 'react';

interface UserData {
  token: string;
  refreshToken: string;
}

interface AuthContextData {
  user: UserData;
  signUp: (email: string, password: string) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// TODO: fint the best way
const AuthContext = createContext<AuthContextData>(null!);

function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<UserData>();
}
