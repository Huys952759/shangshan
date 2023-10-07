import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { useStore } from '@/store';
import Image from 'next/image';

interface ImageDesType {
    English: string,
    Chinese: string,
    Arabic: string
}
interface ImageType {
    url: string,
    title: ImageDesType,
    subtitle: ImageDesType
}

export const ImageList: ImageType[] = [
    {
        url: '1.png',
        title: {
            English: 'FASHION SHENZHEN 2020 AUTUMN EXHIBITION',
            Chinese: '2020年时尚深圳展秋季展',
            Arabic: ''
        },
        subtitle: {
            English: 'Most Stylish Designer Award',
            Chinese: '荣获最具风格奖',
            Arabic: ''
        }
    },
    {
        url: '2.png',
        title: {
            English: 'Fashion Source SHENZHEN/Original Design Fashion week',
            Chinese: '2020年第7届深圳原创设计时装周',
            Arabic: ''
        },
        subtitle: {
            English: 'Won the Top10 Original Designer Award in 2020',
            Chinese: '荣获十佳原创设计师奖',
            Arabic: ''
        }
    },
    {
        url: '3.png',
        title: {
            English: '2021 CHINA INTERNATIONAL FASHION FAIR(MARCHEDTION)',
            Chinese: '2021年中国国际服装服饰博览会(春季)',
            Arabic: ''
        },
        subtitle: {
            English: 'Most Market Potential Award',
            Chinese: '荣获最具市场潜力奖',
            Arabic: ''
        }
    },
    {
        url: '4.png',
        title: {
            English: '2021 FASHION SHENZHEN/FASHION SHENZHEN·AWARDS',
            Chinese: '2021年时尚深圳展',
            Arabic: ''
        },
        subtitle: {
            English: 'Won the Top10 Designers',
            Chinese: '荣获十佳设计师奖',
            Arabic: ''
        }
    },
    {
        url: '5.png',
        title: {
            English: '2021 ORIGINAL DESIGN FASHION WEEK',
            Chinese: '2021年深圳原创时装周',
            Arabic: ''
        },
        subtitle: {
            English: 'Won the Top10 Original Designer Award',
            Chinese: '荣获十佳原创设计师奖',
            Arabic: ''
        }
    },
    {
        url: '6.png',
        title: {
            English: '2022',
            Chinese: '2022年',
            Arabic: ''
        },
        subtitle: {
            English: '“Fairness,integrity,and safe consumption”clothing brand ',
            Chinese: '荣获年度”公平守正,安心消费”服装品牌',
            Arabic: ''
        }
    },
    {
        url: '7.png',
        title: {
            English: '2022 Lyshows Ceremony',
            Chinese: '2022年荔秀盛典',
            Arabic: ''
        },
        subtitle: {
            English: 'Won the Top10 Original Designer Award',
            Chinese: '荣获十佳原创设计师品牌',
            Arabic: ''
        }
    },
    {
        url: '8.png',
        title: {
            English: 'Shenzhen Nanshan District Government“Technology Empowerment, Fashion Nanshan”in 2023',
            Chinese: '2023年深圳南山区政府“科技赋能, 时尚南山”',
            Arabic: ''
        },
        subtitle: {
            English: 'Won the Fashion Pioneer Award',
            Chinese: '荣获时尚先锋奖',
            Arabic: ''
        }
    },
    {
        url: '9.png',
        title: {
            English: '2023 Western Apparel Expo',
            Chinese: '2023年西部服装博览会',
            Arabic: ''
        },
        subtitle: {
            English: 'Won the Original Design Brand Award',
            Chinese: '荣获原创设计品牌奖',
            Arabic: ''
        }
    },
    {
        url: '10.png',
        title: {
            English: '2023 Western Apparel Expo',
            Chinese: '2023年西部服装博览会',
            Arabic: ''
        },
        subtitle: {
            English: 'Won the Excellent Supplier Award',
            Chinese: '荣获优秀供应商奖',
            Arabic: ''
        }
    },
    {
        url: '11.png',
        title: {
            English: 'Member Unit of Shenzhen Garment Industry Association',
            Chinese: '深圳市服装行业协会会员单位',
            Arabic: ''
        },
        subtitle: {
            English: '',
            Chinese: '',
            Arabic: ''
        }
    }
]
export default function Honor() {
    const [language] = useStore.language();
    const [pageText] = useStore.pageText();
    return (
        <PageContainer title="shanshan">
            <div className='honor-image-container flex flex-wrap'>
                {ImageList.map(item => (
                    <div key={item.url} className='honor-image-item'>
                        <Image width={300} height={300} src={`/${item.url}`} alt='' className='honor-image'></Image>
                        <div className='honor-title'>{item.title[language]}</div>
                        <div className='honor-subtitle'>{item.subtitle[language]}</div>
                    </div>))}
            </div>
        </PageContainer>
    )
}
