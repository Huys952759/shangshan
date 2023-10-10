import { useStore } from '@/store';
import Image from 'next/image';

export default function Footer() {
  const [language] = useStore.language();
  const [pageText] = useStore.pageText();

  return (
    <footer className="footer">
      <div className="contact-detail">
        {pageText.contact[language]}Szquanshun@outlook.com
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
          ></Image>
          <Image
            src="/Tictok.png"
            alt=""
            width={24}
            height={24}
            className="icon-img"
          ></Image>
          <Image
            src="/xiaohongshu.svg"
            alt=""
            width={24}
            height={24}
            className="icon-img"
          ></Image>
        </div>
      </div>
    </footer>
  );
}
