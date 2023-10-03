import tw from 'tailwind-styled-components';
import Head from 'next/head';
import Header from '@/components/bussiness/header/Header';
import { ReactNode } from 'react';
import { PageText } from '@/PageText';
import { useStore } from '@/store';
import Image from 'next/image';

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
        <div className="footer">
          <div className="contact-detail">
            {PageText.contact[language]}Szquanshun@outlook.com
          </div>
          <div className="follow-us">
            <div>{PageText.follow[language]}</div>
            <div className="icon-container">
              <Image
                src="/Instagram.png"
                alt=""
                width={24}
                height={24}
                className="icon-img"
              ></Image>
              <Image
                src="/Tictok.png"
                alt=""
                width={24}
                height={24}
                className="icon-img"
              ></Image>
              <Image
                src="/xiaohongshu.svg"
                alt=""
                width={24}
                height={24}
                className="icon-img"
              ></Image>
            </div>
          </div>
        </div>
      </MainTW>
    </>
  );
}

const MainTW = tw.main`
min-h-screen
w-screen
`;
