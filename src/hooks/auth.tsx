/* eslint-disable no-undef */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
// import { useCookies } from 'react-cookie';
import Route from 'next/router';
import { api } from '../services/api';

const cookies = parseCookies();

interface User {
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

interface SignInCredentials {
  user: string;
  password: string;
}

interface AuthContextData {
  user: User;
  // eslint-disable-next-line no-unused-vars
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  // eslint-disable-next-line no-unused-vars
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// const authChannels = new BroadcastChannel('auth');

function AuthProvider({ children }) {
  const [data, setData] = useState<AuthState>(() => {
    const userData = cookies['nextauth.user'];

    if (userData) {
      return { userData: JSON.parse(userData) };
    }
    return {} as AuthState;
  });

  useEffect(() => {
    if (data.userData == undefined) {
      signOut();
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.userData]);

  const signIn = useCallback(async ({ user, password }) => {
    try {
      const response = await api.post('cooasgo-app-sessions', {
        user,
        password,
      });

      setCookie(undefined, 'nextauth.user', JSON.stringify(response.data));
  
      setData(response.data);

    } catch (err) {
     console.log(err)
    }
  
  }, []);

  const signOut = useCallback(() => {
    destroyCookie(undefined, 'nextauth.user')

    // await authChannels.postMessage('signOut');
    Route.push('/')
    setData({} as AuthState);
  }, []);

  // useEffect(() => {
  //   authChannels.onmessage = (message) => {
  //     switch (message.data) {
  //       case 'signOut':
  //         signOut();
  //         break;
  //       default:
  //         break;
  //     }
  //   };
  // }, [signOut]);

  const updateUser = useCallback(
    (userData: User) => {
      setCookie(undefined, 'nextauth.user', JSON.stringify(userData));
      setData({
        userData,
      });
    },
    [setData]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.userData, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
