import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';
import GlobalStyle from '../styles/global';
import { AuthProvider } from '../context/AuthContext';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
          <ToastContainer />
        </ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
