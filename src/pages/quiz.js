import React, { useRef } from 'react';
import QuizContainer from '@/containers/QuizContainer';
import SEO from '@/components/SEO/SEO';
import Layout from '@/components/Layout/Layout';

export default function Quiz() {
    const footerVideoRef = useRef(null);

    return (
        <>
            <SEO
                title="Quiz - Sito Wide Studio Digitale"
                description="Rispondi a 5 brevi domande per scoprire il livello della tua presenza digitale e far crescere il tuo business online."
                canonical="https://www.widestudiodigitale.it/quiz"
            />
            <Layout footerVideoRef={footerVideoRef} videoSrc="/assets/videos/loop.mp4">
                <QuizContainer />
            </Layout>
        </>
    );
}