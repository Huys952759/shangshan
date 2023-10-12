import { PageText } from '@/PageText';
import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { useStore } from '@/store';
import Image from 'next/image';

export default function Home() {
  const [language] = useStore.language();
  return (
    <PageContainer title="shanshan" isFixedHeader>
      <div className="sm:pt-6">
        <div className="cover-image">
          <Image
            className='cover-image-pc'
            src="/cover-image.jpg"
            alt=""
            width={1920}
            height={1080}
          ></Image>
           <Image
            className='cover-image-phone'
            src="/cover-image-phone.jpg"
            alt=""
            width={1920}
            height={1080}
          ></Image>
          <div className="image-title">
            <div className="large-title">Spring / Summer 2024</div>
            <div className="small-title">{PageText.smallTitle[language]}</div>
          </div>
        </div>
        <div className="slogan-container">
          <div className={`slogan ${language}`} >{PageText.slogan[language]}</div>
        </div>
      </div>
    </PageContainer>
  );
}
