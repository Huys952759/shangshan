import tw from 'tailwind-styled-components';
import Head from 'next/head';
import Header from '@/components/bussiness/header/Header';
import { ReactNode } from 'react';
import { useStore } from '@/store';
import Footer from '../footer';

interface Props {
  title: string;
  isFixedHeader?: boolean;
  children: ReactNode;
}
export default function PageContainer({
  title = 'shangshan',
  isFixedHeader = false,
  children,
}: Props) {
  const [language] = useStore.language();

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
      <ContainerTW>
        <Header isFixed={isFixedHeader} />
        <MainTW>{children}</MainTW>
        <Footer></Footer>
      </ContainerTW>
    </>
  );
}

const ContainerTW = tw.div`
min-h-screen
flex
flex-col
`;

const MainTW = tw.main`
flex-1
`;
