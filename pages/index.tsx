import tw from 'tailwind-styled-components';
import Head from 'next/head';
import { useStore } from '@/store';
import { LanguageEnum } from '@/types/language';

export default function Home() {
  const [pageText] = useStore.pageText();
  const [language, updateLanguage] = useStore.language();

  const changeLanguage = () => {
    updateLanguage((draftRef) => {
      draftRef.current = LanguageEnum.Chinese;
    })
  }

  return (
    <MainSC>
      <Head>
        <title>新项目</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <div>
        {pageText.stories[language]}
      </div>
      <button onClick={changeLanguage}>click</button>
    </MainSC>
  );
}

const MainSC = tw.main`
min-h-screen
flex
`;
