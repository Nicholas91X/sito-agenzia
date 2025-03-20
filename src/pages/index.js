import Layout from '@/components/Layout/Layout';
import SEO from '@/components/SEO/SEO';
import HomeContainer from '@/containers/HomeContainer';
import { useRef } from 'react';

export default function Home() {
    const footerVideoRef = useRef(null);

    return (
        <>
            <SEO
                title="Home - Sito Wide Studio Digitale"
                description="Sito vetrina di Wide Studio Digitale. Scopri i nostri servizi digitali e inizia a far crescere il tuo business online."
                canonical="https://www.widestudiodigitale.it"
            />
            <Layout footerVideoRef={footerVideoRef} videoSrc="/assets/videos/loop.mp4">
                <HomeContainer footerVideoRef={footerVideoRef} />
            </Layout>
        </>
    );
}