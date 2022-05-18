import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Head>
        <title>Coocampo</title>
      </Head>
    </>
  );
}
