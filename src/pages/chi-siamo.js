import React, { useRef } from 'react';
import ChiSiamoContainer from '@/containers/ChiSiamoContainer';
import SEO from '@/components/SEO/SEO';
import Layout from '@/components/Layout/Layout';

export default function ChiSiamo() {
    const footerVideoRef = useRef(null);

    return (
        <>
            <SEO
                title="Chi Siamo - Wide Studio Digitale"
                description="Scopri chi siamo: un gruppo di liberi professionisti che unisce competenza, passione e profonda conoscenza del territorio per creare lavori di eccellenza."
                canonical="https://www.widestudiodigitale.it/chi-siamo"
            />
            <Layout footerVideoRef={footerVideoRef} videoSrc="/assets/videos/loop.mp4">
                <ChiSiamoContainer />
            </Layout>
        </>
    );
}