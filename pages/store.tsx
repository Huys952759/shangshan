import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { useStore } from '@/store';
import Image from 'next/image';

const STORE_ADDRESS_LABEL = {
    English: 'Store Address: ',
    Chinese: '门店地址: ',
    Arabic: ''
}

const STORE_ADDRESS = [{
    English: 'Room A2020,2nd Floor,Block A,Nanyou Jinhui Buiding,Nanshan District,Shenzhen City,Guangdong Province',
    Chinese: '广东省深圳市南山区南油金晖大厦A座2楼A2020',
    Arabic: ''
},
{
    English: 'F19,1st Floor,Building 110,Nanyou,Nanshan District,Shenzhen City,Guangdong Province.',
    Chinese: '广东省深圳市南山区南油110栋1楼F19',
    Arabic: ''
}
]

export default function Honor() {
    const [language] = useStore.language();
    const [pageText] = useStore.pageText();
    return (
        <PageContainer title="shanshan">
            <div className='store-image-container'>
                <div className='store-banner'>
                    <Image width={1920} height={971} src='/Banner.jpg' alt=''></Image>
                </div>
                <div className='store-image-item'>
                    <Image width={640} height={379} src='/G-1.jpg' alt=''></Image>
                    <Image width={640} height={379} src='/G-2.jpg' alt=''></Image>
                    <Image width={640} height={379} src='/G-3.jpg' alt=''></Image>
                </div>
                <div className='store-address'>
                    <div className='store-address-label'>{STORE_ADDRESS_LABEL[language]}</div>
                    <div>{STORE_ADDRESS.map(item => (<div>{item[language]}</div>))}</div>

                </div>
            </div>

        </PageContainer>
    )
}