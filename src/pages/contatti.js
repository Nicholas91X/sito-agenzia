import React, { useRef } from 'react';
import ContattiContainer from '@/containers/ContattiContainer';
import SEO from '@/components/SEO/SEO';
import Layout from '@/components/Layout/Layout';

export default function Contatti() {
    const footerVideoRef = useRef(null);

    return (
        <>
            <SEO
                title="Contatti - Sito Wide Studio Digitale"
                description="Contatta Wide Studio Digitale: scopri come possiamo far crescere la tua attività attraverso strategie digitali personalizzate."
                canonical="https://www.widestudiodigitale.it/contatti"
            />
            <Layout footerVideoRef={footerVideoRef} videoSrc="/assets/videos/loop.mp4">
                <ContattiContainer />
            </Layout>
        </>
    );
}