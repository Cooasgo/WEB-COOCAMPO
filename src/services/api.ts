import axios, { AxiosError } from 'axios';
import { useAuth } from '../hooks/auth';

// const tokenGlobal = localStorage.getItem('@Samasc:token');

let isRefreshing = false;
let failedRequestsQueue: {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError<any>) => void;
}[] = [];

export const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://192.168.1.48:3330/',
  // headers: {
  //   authorization: `Bearer ${tokenGlobal}`,
  // },
});

// api.interceptors.response.use(
//   (response) => {
//     console.log('retornou');
//     return response;
//   },
//   (error: AxiosError) => {
//     if (error.response?.status === 401) {
//       if (error.response.data?.code === 'token.expired') {
//         const token_refresh = localStorage.getItem('@Samasc:refresh_token');
//         const originalConfig = error.config;

//         if (!isRefreshing) {
//           isRefreshing = true;
//           api
//             .post('/refresh-token', {
//               refresh_token: token_refresh,
//             })
//             .then((response) => {
//               const { token } = response.data;

//               localStorage.setItem('@Samasc:token', token);
//               localStorage.setItem(
//                 '@Samasc:refresh_token',
//                 response.data.refresh_token
//               );

//               api.defaults.headers.authorization = `Bearer ${token}`;
//               failedRequestsQueue.forEach((request) =>
//                 request.onSuccess(token)
//               );
//               failedRequestsQueue = [];
//             })
//             .catch((err) => {
//               failedRequestsQueue.forEach((request) => request.onFailure(err));
//               failedRequestsQueue = [];
//             })
//             .finally(() => {
//               isRefreshing = false;
//             });
//         }
//         return new Promise((resolve, reject) => {
//           failedRequestsQueue.push({
//             onSuccess: (token: string) => {
//               originalConfig.headers.authorization = `Bearer ${token}`;

//               resolve(api(originalConfig));
//             },
//             onFailure: (err: AxiosError) => {
//               reject(err);
//             },
//           });
//         });
//       } else if (
//         error.response.data?.message === 'Refresh Token does not exists!'
//       ) {
//         const { signOut } = useAuth();
//         signOut();
//       } else if (error.response.data?.code === 'token.malformed') {
//         const { signOut } = useAuth();
//         signOut();
//       } else {
//         const { signOut } = useAuth();
//         signOut();
//       }
//     }
//     return Promise.reject(error);
//   }
// );
