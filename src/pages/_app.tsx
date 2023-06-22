import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';
import GlobalStyle from '../styles/global';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../context/AuthContext';
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider>
        <QueryClientProvider client={queryClient} >
            <ChakraProvider theme={theme}>
              <GlobalStyle />
              <Component {...pageProps} />
              <ToastContainer />
            </ChakraProvider>
        </QueryClientProvider>
      </AuthProvider>
  );
}

export default MyApp;
