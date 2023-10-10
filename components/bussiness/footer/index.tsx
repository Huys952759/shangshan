import { useStore } from '@/store';
import Image from 'next/image';

export default function Footer() {
  const [language] = useStore.language();
  const [pageText] = useStore.pageText();

  return (
    <footer className="footer">
      <div className="contact-detail">
        {pageText.contact[language]}VANSUNSUN@outlook.com
      </div>
      <div className="follow-us">
        <div>{pageText.follow[language]}</div>
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
