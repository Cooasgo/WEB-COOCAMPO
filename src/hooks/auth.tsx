/* eslint-disable no-undef */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
// import { useCookies } from 'react-cookie';
import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  nickname: string;
  status: string;
  tag: string;
  email: string;
  dashboard: boolean;
  goals_and_sub_goals: boolean;
  sector: boolean;
  employers: boolean;
  module_analyze: boolean;
  imports: boolean;
  report: boolean;
  service_send_email: boolean;
  schedule: boolean;
  permissions: string[];
  roles: string[];
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  nickname: string;
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

const AuthProvider: React.FC = ({ children }: any) => {
  const [data, setData] = useState<AuthState>(() => {
    // const token = localStorage.getItem('@Samasc:token');
    // const user = localStorage.getItem('@Samasc:user');

    const token = '';
    const user = '';

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  useEffect(() => {
    console.log('chamou useEffect');
    if (data.token !== undefined) {
      console.log('validou token');
      api
        .get(`/accesses/${data.user.id}`)
        .then((response) => {
          // if (
          //   data.user.permissions !== response.data.permissions ||
          //   response.data.roles !== data.user.roles
          // ) {
          //   console.log('response', response.data);
          //   console.log(
          //     'data.user.permissions',
          //     data.user.permissions !== response.data.permissions,
          //   );
          //   console.log('response.data.permissions', response.data.permissions);
          //   console.log('response.data.roles', response.data.roles);
          //   console.log('data.user.roles', data.user.roles);
          //   console.log('atualizar permissões');
          //   // localStorage.setItem('@Samasc:user', JSON.stringify(response.data));
          // }
          const { token, access, permissions, roles } = response.data;
          const formatData = {
            ...access,
            permissions,
            roles,
          };
          const user = formatData;
          setData({ token, user });
        })
        .catch(() => {
          console.log('deu erro');
          signOut();
        });
    } else {
      console.log('não tem token');
      signOut();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = useCallback(async ({ nickname, password }) => {
    const response = await api.post('sessions', {
      nickname,
      password,
    });
    const { token, refresh_token, access, permissions, roles } = response.data;
    const formatData = {
      ...access,
      permissions,
      roles,
    };
    const user = formatData;
    console.log('user', user);
    // localStorage.setItem('@Samasc:token', token);
    // localStorage.setItem('@Samasc:refresh_token', refresh_token);
    // localStorage.setItem('@Samasc:user', JSON.stringify(user));

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    // localStorage.removeItem('@Samasc:token');
    // localStorage.removeItem('@Samasc:refresh_token');
    // localStorage.removeItem('@Samasc:user');

    // await authChannels.postMessage('signOut');

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
    (user: User) => {
      // localStorage.setItem('@Samasc:user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
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
