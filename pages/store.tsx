import PageContainer from '@/components/bussiness/pagecontainer/PageContainer';
import { useStore } from '@/store';
import Image from 'next/image';

export default function Honor() {
    const [language] = useStore.language();
    const [pageText] = useStore.pageText();
    return (
        <PageContainer title="shanshan">
            <div className='store-image-container'>
                <div className='store-banner'>
                    <Image fill src='/Banner.jpg' alt=''></Image>
                </div>
                <div className='store-image-item'>
                    <Image width={300} height={300} src='/G-1.jpg' alt=''></Image>
                    <Image width={300} height={300} src='/G-2.jpg' alt=''></Image>
                    <Image width={300} height={300} src='/G-3.jpg' alt=''></Image>
                </div>
            </div>
        </PageContainer>
    )
}