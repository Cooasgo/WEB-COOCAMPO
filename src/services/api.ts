/* eslint-disable no-else-return */
import axios, { AxiosError } from 'axios';
import { setCookie, parseCookies } from 'nookies';
import { useAuth } from '../hooks/auth';

let cookies = parseCookies();

let isRefreshing = false;
let failedRequestsQueue: {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError<any>) => void;
}[] = [];

export const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://samasc.cooasgo.com.br:3333',
  headers: {
    authorization: `Bearer ${cookies['nextauth.token']}`,
  },
});

export const apiTBHomologação = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://portal.totalbank.com.br/hmg-api/',
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDT09BU0dPLWFwcF9wcm9kdXRvciIsImNvZGlnbyI6MTIsImNvbnRhX2FjZXNzbyI6IkNPT0FTR08iLCJ1c3VhcmlvIjoiYXBwX3Byb2R1dG9yIiwiaXNzIjoibG9jYWxob3N0OjgwODAiLCJpYXQiOjE2ODQ2MzUxNzcsImV4cCI6MTY4NDYzNTQ3N30.YJpwbsb27-TBlOnobeXWKD7__n8y0CJCFbKXHkMdgzg`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      if (error.response.data?.code === 'token.expired') {
       cookies = parseCookies();
        
        const { 'nextauth.refresh_token': refresh_token } = cookies

        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;
          api
            .post('/refresh_token', {
              refresh_token: refresh_token,
            })
            .then((response) => {
              const { token } = response.data;

              setCookie(undefined, 'nextauth.token', token, {
                maxAge: 60 * 60 * 24 *30,
                path: '/'
              });
              setCookie(undefined, 'nextauth.refresh_token', response.data.refresh_token, {
                maxAge: 60 * 60 * 24 *30,
                path: '/'
              });
              
              api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

              failedRequestsQueue.forEach((request) =>
                request.onSuccess(token)
              );
              failedRequestsQueue = [];
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure(err));
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers.authorization = `Bearer ${token}`;

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      } else if (
        error.response.data?.message === 'Refresh Token does not exists!'
      ) {
        const { signOut } = useAuth();
        signOut();
      } else if (error.response.data?.code === 'token.malformed') {
        const { signOut } = useAuth();
        signOut();
      } else {
        const { signOut } = useAuth();
        signOut();
      }
    }
    return Promise.reject(error);
  }
);

apiTBHomologação.interceptors.response.use(
  (response) => {
    console.log('response interceptor: homologação', response)
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log('error 401 interceptor: homologação', error.response?.status)
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;
          const requestBody = {
              contaAcesso: "COOASGO",
              usuario: "app_produtor",
              senha: "!@#7845C00Ms"
          }

          apiTBHomologação
            .post('/rest/token', requestBody)
            .then((response) => {
              const { token } = response.data;
              console.log('api post interceptor: homologação', response.data)
              localStorage.setItem('@Samasc:token', token);
              
              setCookie(undefined, 'nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
              })

              api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

              failedRequestsQueue.forEach((request) =>
                request.onSuccess(token)
              );
              failedRequestsQueue = [];
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure(err));
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers.authorization = `Bearer ${token}`;

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      
    }
    return Promise.reject(error);
  }
);
