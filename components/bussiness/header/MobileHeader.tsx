import * as React from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import { HeaderElementType } from '@/types/header';
import { HeaderConfig } from '@/config/HeaderConfig';
import { useMemo, useState } from 'react';
import { useStore } from '@/store';
import LanguageIcon from './icon/LanguageIcon';
import styled from 'styled-components';
import { LanguageEnum } from '@/types/language';
import MenuIcon from './icon/MenuIcon';
import CloseIcon from './icon/CloseIcon';

const regex = /\*\*(.*?)\*\*|[^*]+/g;

export default function MobileHeader({ isFixed = false }) {
  const [language, updateLanguage] = useStore.language();
  const [categotiesTree, setCategotiesTree] = useState(() =>
    formTreeData(HeaderConfig),
  );
  const [open, setOpen] = useState(false);

  return (
    <ContainerTW isFixed={isFixed}>
      <TopTW visible={!open}>
        <button
          className="btn btn-ghost p-0"
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuIcon className="w-5 h-5" />
        </button>

        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={400}
            height={80}
            className="h-6 w-auto ml-auto mr-auto"
          />
        </Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost p-0">
            <LanguageIcon className="w-5 h-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] bg-white menu py-2 px-6 shadow rounded-box w-40"
          >
            <li
              onClick={() => {
                updateLanguage((draftRef) => {
                  draftRef.current = LanguageEnum.English;
                });
              }}
              className={
                language === LanguageEnum.English ? 'font-bold py-2' : 'py-2'
              }
            >
              ENGLISH
            </li>
            <li
              onClick={() => {
                updateLanguage((draftRef) => {
                  draftRef.current = LanguageEnum.Chinese;
                });
              }}
              className={
                language === LanguageEnum.Chinese ? 'font-bold py-2' : 'py-2'
              }
            >
              中文
            </li>
            <li
              onClick={() => {
                updateLanguage((draftRef) => {
                  draftRef.current = LanguageEnum.Arabic;
                });
              }}
              className={
                language === LanguageEnum.Arabic ? 'font-bold py-2' : 'py-2'
              }
            >
              اللغة العربية
            </li>
          </ul>
        </div>
      </TopTW>
      {open && (
        <OpenContentTW>
          <OpenTopTW>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={400}
                height={80}
                className="h-6 w-auto ml-auto mr-auto"
              />
            </Link>
            <button
              className="btn btn-ghost p-0"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </OpenTopTW>
          <div className="divider"></div>
          <ul className="menu w-full p-0">
            {categotiesTree.children.map((child) => (
              <FileTree
                fileTree={child}
                key={child.path}
                onSelect={() => {
                  console.log(111);

                  setOpen(false);
                }}
              />
            ))}
          </ul>
        </OpenContentTW>
      )}
    </ContainerTW>
  );
}

const FileTree = ({ fileTree, onSelect }) => {
  const [language] = useStore.language();
  if (fileTree.children?.length)
    return (
      <li className="my-3">
        <details open={false}>
          <summary className="font-extrabold text-[14px] pl-0">
            {fileTree.name[language]}
          </summary>
          <ul>
            {fileTree.children.map((child) => (
              <FileTree fileTree={child} key={child.path} onSelect={onSelect} />
            ))}
          </ul>
        </details>
      </li>
    );

  if (fileTree.path?.startsWith('new'))
    return (
      <li
        onClick={onSelect}
        className="font-extrabold text-[14px] max-w-[280px] truncate my-3"
      >
        <Link href={`/category/${fileTree.path}`} className="pl-0">
          {fileTree.name[language]}
        </Link>
      </li>
    );

  if (fileTree.path?.startsWith('show'))
    return (
      <li
        onClick={onSelect}
        className="font-extrabold text-[14px] max-w-[280px] truncate my-3"
      >
        <Link href={`/category/${fileTree.path}`} className="pl-0">
          <div>
            <div>
              {
                fileTree.name[language]
                  .match(regex)
                  .map((match) => match.replace(/\*\*/g, ''))[0]
              }
            </div>
            <div className="font-semibold mt-2">
              {fileTree.name[language].match(regex)[1]}
            </div>
          </div>
        </Link>
      </li>
    );

  return (
    <li
      onClick={onSelect}
      className="font-extrabold text-[14px] max-w-[280px] truncate my-3"
    >
      <Link href={`/${fileTree.path}`} className="pl-0">
        {fileTree.name[language]}
      </Link>
    </li>
  );
};

interface ContainerProps {
  isFixed: boolean;
}

const ContainerTW = tw.header<ContainerProps>`
  w-screen
  h-fit
  px-[20px]
  sm:hidden
  ${(p) => p.isFixed && 'fixed left-0 top-0 z-50'}
`;

interface TopTWProps {
  visible: boolean;
}
const TopTW = tw.div<TopTWProps>`
  w-full
  py-[18px]
  flex
  justify-between
  items-center
  ${(p) => !p.visible && 'invisible'}
`;

const OpenContentTW = tw.div`
    w-screen
    h-screen
    bg-white
    fixed
    left-0
    top-0
    bottom-0
    right-0
    z-50
    px-[20px]
    overflow-auto
`;

const OpenTopTW = tw.div`
w-full
pt-[18px]
flex
justify-between
items-center
`;

const formTreeData = (categories: HeaderElementType[]) => {
  const tree = {
    isRoot: true,
    children: [],
  };

  // 构建树的辅助函数
  function addToTree(node: any, parts: string[], category: Category) {
    if (parts.length === 0) {
      // 如果已经到达路径的最后，将文件信息添加到节点
      for (const key of Object.keys(category)) {
        node[key] = category[key];
      }
      return;
    }

    const part = parts.shift();
    if (!node.children) {
      node.children = [];
    }
    if (!node.children.find((child) => child.nodePath === part)) {
      // 如果当前节点下不存在该路径部分，创建一个新节点
      node.children.push({
        nodePath: part,
      });
    }
    addToTree(
      node.children.find((child) => child.nodePath === part),
      parts,
      category,
    );
  }

  // 遍历文件数组，逐个添加到树中
  categories.forEach((category) => {
    const parts = category.path.split('/');
    addToTree(tree, parts, category);
  });

  return tree;
};
