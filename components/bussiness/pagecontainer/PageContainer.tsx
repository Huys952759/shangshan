import tw from 'tailwind-styled-components';
import Head from 'next/head';
import Header from '@/components/bussiness/header/Header';
import { ReactNode } from 'react';
import { useStore } from '@/store';
import Footer from '../footer';

interface Props {
  title: string;
  children: ReactNode;
}
export default function PageContainer({
  title = 'shangshan',
  children,
}: Props) {
  const [language] = useStore.language();
  console.log(children);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <MainTW>
        <Header></Header>
        {children}
        <Footer></Footer>
      </MainTW>
    </>
  );
}

const MainTW = tw.main`
min-h-screen
w-screen
`;
