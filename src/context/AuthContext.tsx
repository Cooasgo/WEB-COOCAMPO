import { createContext, ReactNode, useState } from 'react';
import Router from 'next/router';
import { api } from '../services/api';
import { apllyToast } from '../components/Toast';

type User = {
  name: string;
  email: string;
  cpf: string;
};

type SignInCredentials = {
  cpf: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  async function signIn({ cpf, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', { cpf, password });

      const { token, refreshToken, email, name } = response.data;

      setUser({
        cpf,
        email,
        name,
      });

      Router.push('/home');
    } catch (err) {
      apllyToast('error', 'Problemas ao realizar login');
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
