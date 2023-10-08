import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { HeaderConfig } from '@/config/HeaderConfig';
import Image from 'next/image';
import { useStore } from '@/store';
import { styled } from 'styled-components';
import Link from 'next/link';
import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { PageText } from '@/PageText';

export default function HomePge({ products, category }) {
  const [language] = useStore.language();

  return (
    <PageContainer
      title={
        HeaderConfig.find((item) => item.path === category)?.name[language] ||
        'shangshan'
      }
    >
      <ContentTW>
        {products.map((product) => (
          <Link href={`/product/${product.id}`}>
            <ProductItemTW key={product.id}>
              <div className="img-container">
                <img alt="" src={product.coverImage} />
              </div>
              <div className="text-black mt-3 text-xl">
                {product.name[language]}
              </div>
              {!product.price.hidden && (
                <div className="text-black mt-3 text-2xl font-bold">
                  <span>{language === 'English' ? '$' : '￥'}</span>
                  <span>{product.price[language]}</span>
                </div>
              )}
            </ProductItemTW>
          </Link>
        ))}
      </ContentTW>
    </PageContainer>
  );
}

const ContentSC = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1rem;
  justify-items: start;
`;

const ContentTW = tw(ContentSC)`
    pt-6
    px-[30px]
    text-black
`;

const ProductItemSC = styled('div')`
  margin-bottom: 50px;

  .img-container {
    width: 320px;
    height: 480px;
    background: black;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
const ProductItemTW = tw(ProductItemSC)`

`;

export const getStaticProps = async ({ params }) => {
  const productsRemoteData = await fetch(
    'https://customer-shangshan.oss-cn-shenzhen.aliyuncs.com/products.json',
  ).then((res) => res.json());
  const products = productsRemoteData.filter((product) =>
    product.categories.some((category) =>
      category.path.includes(params?.category.join('/')),
    ),
  );

  return {
    props: {
      products,
      category: params?.category.join('/'),
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: HeaderConfig.filter((config) => config.path.startsWith('new/')).map(
      (catogory) => `/category/${catogory.path}`,
    ),
    fallback: 'blocking',
  };
};
