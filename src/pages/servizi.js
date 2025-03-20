import React, { useRef } from 'react';
import ServiziContainer from '@/containers/ServiziContainer';
import SEO from '@/components/SEO/SEO';
import Layout from '@/components/Layout/Layout';
export default function Servizi() {
    const footerVideoRef = useRef(null);

    return (
        <>
            <SEO
                title="Servizi - Sito Wide Studio Digitale"
                description="Scopri i nostri servizi: dalla gestione del digital marketing alla creazione di contenuti, offriamo soluzioni all-in-one per far crescere il tuo business online."
                canonical="https://www.widestudiodigitale.it/servizi"
            />
            <Layout footerVideoRef={footerVideoRef} videoSrc="/assets/videos/loop.mp4">
                <ServiziContainer />
            </Layout>
        </>
    );
}