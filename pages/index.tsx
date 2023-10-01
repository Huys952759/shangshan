import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import Image from 'next/image';

export default function Home() {
  return <PageContainer title="shanshan">
    <div className='cover-image'>
      <Image src='/cover-image.jpg' alt='' fill></Image>
      <div className='image-title'>
        <div className='large-title'>Spring / Summer 2024</div>
        <div className='small-title'>回溯自然&nbsp;&nbsp;探寻本归</div>
      </div>
    </div>
    <div className='slogan-container'>
      <div className='slogan'>循自然之道 成生命之美</div>
    </div>
    <div className='footer'>
      <div className='contact-detail'>Contact Us:  Szquanshun@outlook.com</div>
      <div className='follow-us'>
        <div>Follow us on:</div>
        <div className='icon-container'>
          <Image src='/Instagram.png' alt='' width={24} height={24} className='icon-img'></Image>
          <Image src='/Tictok.png' alt='' width={24} height={24} className='icon-img'></Image>
          <Image src='/xiaohongshu.svg' alt='' width={24} height={24} className='icon-img'></Image>
        </div>
      </div>
    </div>
  </PageContainer>;
}
