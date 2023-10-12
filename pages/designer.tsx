import tw from 'tailwind-styled-components';
import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { useStore } from '@/store';
import { PageText } from '@/PageText';

export default function Home() {
  const [language] = useStore.language();

  return (
    <PageContainer title={PageText['designer.name'][language]}>
      <PCContentTW>
        <div className="flex-1">
          <img src="/designer.png" alt="" className="w-full h-auto" />
        </div>
        <div className="flex-1 flex justify-center flex-col">
          <div className="text-[26px] font-bold mb-5">
            {PageText['designer.name'][language]}
          </div>
          <div className="max-w-[600px]">
            {PageText['designer.introduction'][language]}
          </div>
        </div>
      </PCContentTW>
      <MobileContentTW>
        <div>
          <img src="/designer.png" alt="" className="w-full h-auto" />
        </div>
        <div className="flex justify-center flex-col pb-10">
          <div className="text-[26px] font-bold mb-5">
            {PageText['designer.name'][language]}
          </div>
          <div className="max-w-[600px]">
            {PageText['designer.introduction'][language]}
          </div>
        </div>
      </MobileContentTW>
    </PageContainer>
  );
}

const PCContentTW = tw.div`
    pt-6
    px-[30px]
    text-black
    hidden
    sm:flex
`;

const MobileContentTW = tw.div`
px-[20px]
text-black
sm:hidden
`;
