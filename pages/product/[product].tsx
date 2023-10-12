import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import Image from 'next/image';
import { useStore } from '@/store';
import { styled } from 'styled-components';
import { PageText } from '@/PageText';

export default function HomePge({ product }) {
  const [language] = useStore.language();
  const [activeColorInfo, setActiveColorInfo] = useState(product.colors[0]);

  console.log(product);

  return (
    <PageContainer title={product.name[language]}>
      <PCContainerTW>
        <ImageGroupTW>
          <FullImageItemTW>
            <Image
              width={5128}
              height={7689}
              alt=""
              src={activeColorInfo.images[0]}
            />
          </FullImageItemTW>
          {activeColorInfo.images.slice(1).map((image) => (
            <HalfImageItemTW>
              <Image width={5128} height={7689} alt="" src={image} />
            </HalfImageItemTW>
          ))}
        </ImageGroupTW>
        <InfoGroupTW>
          <SKUST>SKU: {product.id}</SKUST>
          <NameST>{product.name[language]}</NameST>
          {!product.price.hidden && (
            <PriceST>
              <span>{language === 'English' ? '$' : '￥'}</span>
              <span>{product.price[language]}</span>
            </PriceST>
          )}
          <ColorContainerTW>
            {product.colors.map((color) => (
              <ImageItemTW onClick={() => setActiveColorInfo(color)}>
                <Image width={500} height={500} alt="" src={color.colorImage} />
              </ImageItemTW>
            ))}
          </ColorContainerTW>
          <NameST>{PageText.material[language]}</NameST>
          <IntroductionST>{product.materials[language]}</IntroductionST>
          <NameST style={{ marginTop: 0 }}>
            {PageText.description[language]}
          </NameST>
          <IntroductionST>{product.description[language]}</IntroductionST>
          {product.maintenance[language] && (
            <>
              <NameST style={{ marginTop: 0 }}>
                {PageText.maintenance[language]}
              </NameST>
              <IntroductionST>{product.maintenance[language]}</IntroductionST>
            </>
          )}
        </InfoGroupTW>
      </PCContainerTW>
      <MobileContainerTW>
        <SKUST>SKU: {product.id}</SKUST>
        <FullImageItemTW>
          <Image
            width={5128}
            height={7689}
            alt=""
            src={activeColorInfo.images[0]}
            className="rounded-sm"
          />
        </FullImageItemTW>
        <NameST>{product.name[language]}</NameST>
        {!product.price.hidden && (
          <PriceST>
            <span>{language === 'English' ? '$' : '￥'}</span>
            <span>{product.price[language]}</span>
          </PriceST>
        )}
        <ColorContainerTW>
          {product.colors.map((color) => (
            <ImageItemTW onClick={() => setActiveColorInfo(color)}>
              <Image width={500} height={500} alt="" src={color.colorImage} />
            </ImageItemTW>
          ))}
        </ColorContainerTW>
        <NameST>{PageText.material[language]}</NameST>
        <IntroductionST>{product.materials[language]}</IntroductionST>
        <NameST>{PageText.description[language]}</NameST>
        <IntroductionST>{product.description[language]}</IntroductionST>
        {product.maintenance[language] && (
          <>
            <NameST style={{ marginTop: 0 }}>
              {PageText.maintenance[language]}
            </NameST>
            <IntroductionST>{product.maintenance[language]}</IntroductionST>
          </>
        )}
        <ImageGroupTW>
          {activeColorInfo.images.slice(1).map((image) => (
            <HalfImageItemTW>
              <Image width={5128} height={7689} alt="" src={image} />
            </HalfImageItemTW>
          ))}
        </ImageGroupTW>
      </MobileContainerTW>
    </PageContainer>
  );
}

const ProductContainerSC = styled.div``;

const PCContainerTW = tw(ProductContainerSC)`
    pt-6
    px-[30px]
    hidden
    sm:flex
`;

const MobileContainerTW = tw(ProductContainerSC)`
    pt-6
    px-[20px]
    sm:hidden
`;

const ImageGroupTW = tw.div`
    w-full
    flex
    justify-between
    flex-wrap
    shrink-0
    sm:w-1/2
`;

const FullImageItemTW = tw.div`
    w-full
    mb-3
`;

const HalfImageItemTW = tw.div`
    w-[calc(50%-6px)]
    mb-3
`;

const InfoGroupTW = tw.div`
w-half
ml-20

`;

const SKUSC = styled('div')`
  color: #6f6f6f;
`;

const SKUST = tw(SKUSC)`
    text-sm
    mb-5
`;

const NameST = tw.div`
    text-black
    mt-5
    text-[18px]
    font-semibold
    sm:mt-14
    sm:text-[28px]
`;

const PriceSC = styled.div`
  font-size: 18px;
`;

const PriceST = tw(PriceSC)`
mt-5
sm:mt-[30px]
text-black
`;

const IntroductionST = tw.div`
mt-[14px]
mb-[30px]
text-black
text-base
max-w-xl
`;

const ColorContainerSC = styled('div')``;

const ColorContainerTW = tw(ColorContainerSC)`
    mt-5
    flex
    sm:mt-10
`;

const ImageItemSC = styled('div')`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ImageItemTW = tw(ImageItemSC)`
  w-10
  h-10
  mr-5
  sm:w-[78px]
  sm:h-[78px]
`;

export const getStaticProps = async ({ params }) => {
  const products = await fetch(
    'https://customer-shangshan.oss-cn-shenzhen.aliyuncs.com/products.json',
  ).then((res) => res.json());
  const product = products.find((product) => product.id === params?.product);
  return {
    props: {
      product,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  const products = await fetch(
    'https://customer-shangshan.oss-cn-shenzhen.aliyuncs.com/products.json',
  ).then((res) => res.json());
  return {
    paths: products.map((product) => `/product/${product.id}`),
    fallback: 'blocking',
  };
};
