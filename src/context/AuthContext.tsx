import { createContext, ReactNode, useState } from 'react';
import Router from 'next/router';
import { api } from '../services/api';
import { apllyToast } from '../components/Toast';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useCallbackRef } from '@chakra-ui/react';

type User = {
  Usuario: string,
	TransacionadorCodigo: string,
	TransacionadorNome: string,
	CPF: string,
	Email: string
}

interface AuthState {
  // token: string;
  userData: User;
}

type SignInCredentials = {
  user: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
  signOut(): void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const cookies = parseCookies();
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const userData = cookies['nextauth.user'];

    if (userData) {
      return { userData: JSON.parse(userData) };
    }
    return {} as AuthState;
  });

  const isAuthenticated = !!data;

  async function signIn({ user, password }: SignInCredentials) {
    try {
     const response = await api.post('cooasgo-app-sessions', {
        user,
        password,
      });
      const { token, refresh_token,TransacionadorCodigo, TransacionadorNome, CPF, Email } = response.data;

      setCookie(undefined, 'nextauth.user', JSON.stringify(response.data));
      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 *30,
        path: '/'
      });
      setCookie(undefined, 'nextauth.refresh_token', refresh_token, {
        maxAge: 60 * 60 * 24 *30,
        path: '/'
      });
      
      const formated = {
        Usuario: user, 
        TransacionadorCodigo,
        TransacionadorNome, 
        CPF, 
        Email 
      }

      setData({userData: formated});

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('/home');
    } catch (err) {
      apllyToast('error', 'Problemas ao realizar login');
      console.log(err);
    }
  }

  const signOut = useCallbackRef(() => {
    destroyCookie(undefined, 'nextauth.user')
    destroyCookie(undefined, 'nextauth.token')
    destroyCookie(undefined, 'nextauth.refresh_token')

    // await authChannels.postMessage('signOut');
    Router.push('/')
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user: data.userData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
