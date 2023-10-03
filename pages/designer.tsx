import tw from 'tailwind-styled-components';
import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { useStore } from '@/store';

export default function Home() {
  const [language] = useStore.language();
  const [pageText] = useStore.pageText();

  return (
    <PageContainer title={pageText.about[language]}>
      <ContentTW>
      
      </ContentTW>
    </PageContainer>
  );
}

const ContentTW = tw.div`
    pt-6
    px-[30px]
    text-black
`;
