import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Content } from '../components/CardsQuote/Content';
import { Container } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Header />
      <Head>
        <title>Coocampo</title>
      </Head>
      <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
        <Content />
      </Container>
      <Sidebar />
    </>
  );
}
