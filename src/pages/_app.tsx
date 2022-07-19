import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';
import GlobalStyle from '../styles/global';
import { AuthProvider } from '../context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
