import * as React from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { HeaderElementType } from '@/types/header';
import { HeaderConfig } from '@/config/HeaderConfig';
import { useMemo, useState } from 'react';
import { useStore } from '@/store';
import LanguageIcon from '@/components/icon/LanuageIcon';
import styled from 'styled-components';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LanguageEnum } from '@/types/language';

const regex = /\*\*(.*?)\*\*|[^*]+/g;

export default function Header() {
  const [language, updateLanguage] = useStore.language();
  const [categotiesTree, setCategotiesTree] = useState(() =>
    formTreeData(HeaderConfig),
  );

  return (
    <ContainerTW>
      <Link href="/">
        <LogoTW>
          <Image
            src="/logo.png"
            alt="logo"
            width={400}
            height={80}
            className="w-[200px] h-auto ml-auto mr-auto"
          />
        </LogoTW>
      </Link>
      <SecondTW>
        <NavigationMenu>
          <NavigationMenuList>
            {categotiesTree.children.map((child) => {
              if (child.children?.length) {
                return (
                  <NavigationMenuItem key={child.path}>
                    <NavigationMenuTrigger>
                      {child.name[language]}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {child.path === 'new' && (
                        <NewContent items={child.children} />
                      )}
                      {child.path === 'show' && (
                        <ShowContent items={child.children} />
                      )}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={child.path}>
                  <Link href={`/${child.path}`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {child.name[language]}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and
                          Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <LanguageIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent alignOffset={100}>
            <DropdownMenuItem
              onSelect={() => {
                updateLanguage((draftRef) => {
                  draftRef.current = LanguageEnum.English;
                });
              }}
            >
              <div className={language === LanguageEnum.English && 'font-bold'}>
                ENGLISH
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => {
                updateLanguage((draftRef) => {
                  draftRef.current = LanguageEnum.Chinese;
                });
              }}
            >
              <div className={language === LanguageEnum.Chinese && 'font-bold'}>
                中文
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => {
                updateLanguage((draftRef) => {
                  draftRef.current = LanguageEnum.Arabic;
                });
              }}
            >
              <div className={language === LanguageEnum.Arabic && 'font-bold'}>
                اللغة العربية
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SecondTW>
    </ContainerTW>
  );
}

const NewContent = ({ items }) => {
  const [language, updateLanguage] = useStore.language();
  return (
    <div className="w-[calc(100vw-60px)] p-8">
      <ul className="grid grid-cols-2 w-[200px] gap-4">
        {items.map((item) => (
          <li key={item.path} className="cursor-pointer">
            {item.name[language]}
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

const ShowContent = ({ items }) => {
  const [language, updateLanguage] = useStore.language();
  const years = useMemo(() => {
    const _years = [];
    const newItems = [...items];
    newItems.reverse();

    for (let i = 0; i < newItems.length; i += 2) {
      const year = [];
      year.push(newItems[i]);
      if (i + 1 < newItems.length) {
        year.push(newItems[i + 1]);
      }
      _years.push(year);
    }
    return _years.reverse();
  }, [items]);

  return (
    <div className="w-[calc(100vw-60px)] px-8">
      <ul className="grid grid-cols-4 w-full gap-4">
        {years.map((year) => (
          <li className="cursor-pointer">
            <ul>
              {year.map((item) => (
                <li className="my-[50px]">
                  <div className="font-semibold">
                    {
                      item.name[language]
                        .match(regex)
                        .map((match) => match.replace(/\*\*/g, ''))[0]
                    }
                  </div>
                  <div>{item.name[language].match(regex)[1]}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

const ContainerTW = tw.div`
  w-full
  h-fit
  bg-white
  px-[30px]
`;

const LogoTW = tw.div`
  w-full
  py-[18px]
`;

const SecondSC = styled.div`
  .icon {
    width: 20px;
    height: 20px;
  }
`;

const SecondTW = tw(SecondSC)`
  w-full
  flex
  items-center
  justify-between
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
