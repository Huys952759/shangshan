import tw from 'tailwind-styled-components';
import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { useStore } from '@/store';
import { PageText } from '@/PageText';

export default function Home() {
  const [language] = useStore.language();

  return (
    <PageContainer title={PageText.about[language]}>
      <PCContentTW>
        <FirstLineTW>
          <div className="flex-2 relative">
            <img
              src="/highlight/Banner.jpg"
              alt="banner"
              className="w-full h-auto"
            />
            <div className="absolute left-[calc(100%+21px)] top-0 h-full w-1/2 flex flex-col">
              <div className="flex-1 h-0">
                <img
                  src="/highlight/A-1.jpg"
                  alt="A-1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-[21px]"></div>
              <div className="flex-1 h-0">
                <img
                  src="/highlight/A-2.jpg"
                  alt="A-2"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 ml-[21px]"></div>
        </FirstLineTW>
        <SecondLineTW>
          <div className="flex-1">
            <img src="/highlight/A-3.jpg" alt="A-3" className="w-full h-auto" />
          </div>
          <div className="w-[21px]"></div>
          <div className="flex-1">
            <img src="/highlight/A-4.jpg" alt="A-4" className="w-full h-auto" />
          </div>
          <div className="w-[21px]"></div>
          <div className="flex-1">
            <img src="/highlight/A-5.jpg" alt="A-5" className="w-full h-auto" />
          </div>
        </SecondLineTW>
      </PCContentTW>
      <MobileContentTW>
        <img
          src="/highlight/Banner.jpg"
          alt="banner"
          className="w-full h-auto  mb-5 rounded-sm"
        />
        <img
          src="/highlight/A-1.jpg"
          alt="A-1"
          className="w-full h-auto  mb-5 rounded-sm"
        />
        <img
          src="/highlight/A-2.jpg"
          alt="A-2"
          className="w-full h-auto  mb-5 rounded-sm"
        />
        <img
          src="/highlight/A-3.jpg"
          alt="A-3"
          className="w-full h-auto  mb-5 rounded-sm"
        />
        <img
          src="/highlight/A-4.jpg"
          alt="A-4"
          className="w-full h-auto mb-5 rounded-sm"
        />
        <img
          src="/highlight/A-5.jpg"
          alt="A-5"
          className="w-full h-auto  mb-5 rounded-sm"
        />
      </MobileContentTW>
    </PageContainer>
  );
}

const PCContentTW = tw.div`
    pt-6
    px-[30px]
    text-black
    hidden
    sm:block
`;

const FirstLineTW = tw.div`
    w-full
    flex
`;

const SecondLineTW = tw.div`
    w-full
    flex
    mt-[21px]
`;

const MobileContentTW = tw.div`
pt-6
px-[20px]
text-black
block
sm:hidden
`;
