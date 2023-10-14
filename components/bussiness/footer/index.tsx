import { useStore } from '@/store';
import Image from 'next/image';

export default function Footer() {
  const [language] = useStore.language();
  const [pageText] = useStore.pageText();

  return (
    <footer className="footer">
      <div className="contact-detail">
        <div className='contact-detail-label'>
        {pageText.contact[language]} :&nbsp;
        </div>
        <div className='contact-detail-email'> VANSUNSUN@outlook.com</div>
      </div>
      <div className='footer-divider'></div>
      <div className="follow-us">
        <div className='follow-us-label'>{pageText.follow[language]} :&nbsp;</div>
        <div className="icon-container">
          <Image
            src="/Instagram.png"
            alt=""
            width={24}
            height={24}
            className="icon-img"
            onClick={() => { window.open('https://www.instagram.com/vansun.sun/') }}

          ></Image>
          <Image
            src="/Tictok.png"
            alt=""
            width={24}
            height={24}
            className="icon-img"
            onClick={() => { window.open('https://www.douyin.com/user/MS4wLjABAAAAzcGPxQUnhLWtjfmt5cddprnSuPj4Vfbp3iHwgdIS1cEoRgXmlH48CwQ279wBe-Cd') }}
          ></Image>
          <Image
            src="/xiaohongshu.svg"
            alt=""
            width={24}
            height={24}
            className="icon-img"
            onClick={() => { window.open('https://www.xiaohongshu.com/user/profile/5f9de97700000000010051d7?exSource=https://www.xiaohongshu.com/search_result?keyword=1056706262&source=web_explore_feed') }}
          ></Image>
        </div>
      </div>
    </footer>
  );
}
