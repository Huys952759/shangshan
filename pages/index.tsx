import { PageText } from '@/PageText';
import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { useStore } from '@/store';
import Image from 'next/image';

export default function Home() {
  const [language] = useStore.language();
  return <PageContainer title="shanshan">
    <div className='cover-image'>
      <Image src='/cover-image.jpg' alt='' fill></Image>
      <div className='image-title'>
        <div className='large-title'>Spring / Summer 2024</div>
        <div className='small-title'>{PageText.smallTitle[language]}</div>
      </div>
    </div>
    <div className='slogan-container'>
      <div className='slogan'>{PageText.slogan[language]}</div>
    </div>
    <div className='footer'>
      <div className='contact-detail'>{PageText.contact[language]}Szquanshun@outlook.com</div>
      <div className='follow-us'>
        <div>{PageText.follow[language]}</div>
        <div className='icon-container'>
          <Image src='/Instagram.png' alt='' width={24} height={24} className='icon-img'></Image>
          <Image src='/Tictok.png' alt='' width={24} height={24} className='icon-img'></Image>
          <Image src='/xiaohongshu.svg' alt='' width={24} height={24} className='icon-img'></Image>
        </div>
      </div>
    </div>
  </PageContainer>;
}
