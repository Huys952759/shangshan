import tw from 'tailwind-styled-components';
import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { useStore } from '@/store';

export default function Home() {
  const [language] = useStore.language();
  const [pageText] = useStore.pageText();

  return (
    <PageContainer title={pageText.about[language]}>
      <ContentTW>
        <TeamTW>
          <TeamImageTW></TeamImageTW>
          <TeamWordTW>
            <div className="text-[26px] font-bold">
              {pageText['about.team.title'][language]}
            </div>
            <div className="mt-5 text-[18px]">
              {pageText['about.team.content'][language]}
            </div>
          </TeamWordTW>
        </TeamTW>
        <CompanyTW>
          <CompanyWordTW>
            <div className="text-[26px] font-bold">
              {pageText['about.company.title'][language]}
            </div>
            <div className="mt-5 text-[18px] max-w-[1050px]">
              {pageText['about.company.content'][language]}
            </div>
          </CompanyWordTW>
          <CompanyImgTW></CompanyImgTW>
        </CompanyTW>
      </ContentTW>
    </PageContainer>
  );
}

const ContentTW = tw.div`
    pt-6
    px-[30px]
    text-black
`;

const TeamTW = tw.div`
    flex
    items-center
`;

const TeamImageTW = tw.div`
    flex-1
    h-[590px]
    bg-[#F0F0F0]
`;

const TeamWordTW = tw.div`
    w-[300px]
    ml-[30px]
`;

const CompanyTW = tw.div`
    mt-[50px]
`;

const CompanyWordTW = tw.div`
    flex
    flex-col
    items-center
`;

const CompanyImgTW = tw.div`
    w-full
    h-[590px]
  bg-[#F0F0F0]
    mt-[50px]
`;
