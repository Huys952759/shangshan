import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { useStore } from '@/store';
import Image from 'next/image';

interface ImageType {
    url: string,
    title: string,
    subtitle: string
}

export const ImageList: ImageType[] = [
    {
        url: '1.png',
        title: '2020年第7届深圳原创设计时装周',
        subtitle: '荣获十佳原创设计师奖'
    },
    {
        url: '2.png',
        title: '2021年中国国际服装服饰博览会(春季)',
        subtitle: '荣获最具市场潜力奖'
    },
    {
        url: '3.png',
        title: '2021年时尚深圳展',
        subtitle: '荣获十佳设计师奖'
    },
    {
        url: '4.png',
        title: '2021年深圳原创时装周',
        subtitle: '荣获十佳设计师奖'
    },
    {
        url: '5.png',
        title: '2022年',
        subtitle: '荣获年度”公平守正，安心消费”服装品牌'
    },
    {
        url: '6.png',
        title: '2022年荔秀盛典',
        subtitle: '荣获十佳原创设计师品牌'
    },
    {
        url: '7.png',
        title: '2023年深圳南山区政府',
        subtitle: '科技赋能，时尚南山”荣获时尚先锋奖'
    },
    {
        url: '8.png',
        title: '2023年西部服装博览会',
        subtitle: '荣获原创设计品牌奖'
    },
    {
        url: '9.png',
        title: '荣获原创设计品牌奖',
        subtitle: '2023年西部服装博览会'
    },
    {
        url: '9.png',
        title: '深圳市服装行业协会会员单位',
        subtitle: ''
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
                        <div className='honor-title'>{item.title}</div>
                        <div className='honor-subtitle'>{item.subtitle}</div>
                    </div>))}
            </div>
        </PageContainer>
    )
}
