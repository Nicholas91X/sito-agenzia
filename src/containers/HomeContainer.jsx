import React, { useRef, useEffect, useState } from 'react';
import useAutoplayVideos from '../hooks/useAutoplayVideos';

// Componenti estratti
import VideoHero from '../components/VideoHero/VideoHero';
import VideoFooter from '../components/VideoFooter/VideoFooter';

// Alcuni styled component ereditati (se vuoi) oppure puoi crearne di nuovi
import { Typography } from '@mui/material';
import Navbar from '@/components/Navbar copy/Navbar';
import HoverPreviewItem from '@/components/HoverPreview/HoverPreview';
import { AnotherBoxVideo, BoxUnderRow, BoxUnderVideoSection, CircleArrowHorizontal, UnderVideoSection, VerticalLine } from '@/components/Commons/CommonsComponents';
import Link from 'next/link';

export default function HomeContainer() {
    const mainVideoRef = useRef(null);
    const footerVideoRef = useRef(null);

    // Hook personalizzato per gestire autoplay/pausa collo scroll
    useAutoplayVideos([mainVideoRef, footerVideoRef]);

    // Impostazione manuale del playbackRate
    useEffect(() => {
        if (mainVideoRef.current) {
            mainVideoRef.current.playbackRate = 0.85;
        }
        if (footerVideoRef.current) {
            footerVideoRef.current.playbackRate = 0.5;
        }
    }, []);

    // Gestione anteprima hover
    const previewRefs = useRef([]);
    const [previewSrc, setPreviewSrc] = useState(null);

    const handleMouseEnter = (src, index) => {
        previewRefs.current[index] = src;
        setPreviewSrc(src);
    };

    const handleMouseLeave = (index) => {
        previewRefs.current[index] = null;
        setPreviewSrc(null);
    };

    // Array di servizi per .map
    const services = [
        { label: 'DIGITAL MARKETING /', src: '/assets/videos/mockup.mp4' },
        { label: 'SOCIAL MEDIA MARKETING /', src: '/assets/videos/mockup_1.mp4' },
        { label: 'WEBSITES /', src: '/assets/videos/mockup_2.mp4' },
        { label: 'FOTO & VIDEO /', src: '/assets/videos/mockup_3.mp4' },
    ];

    // Scroll su click
    const handleScrollDown = () => {
        const offset = window.innerHeight * 0.8;
        window.scrollBy({ top: offset, left: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar />

            {/**
       * Componente "hero": video in background + overlay + titolo + scroll indicator
       */}
            <VideoHero
                videoRef={mainVideoRef}
                videoSrc="/assets/videos/mockup_6.mp4"
                titleText="Welcome Into Digital Era"
                onScrollDown={handleScrollDown}
            />

            {/**
       * Sezione contenuti
       */}
            <UnderVideoSection sx={{ padding: { xs: '0 1rem', sm: '0 3rem', md: '0 10rem', lg: '0 5rem', xl: '0 10rem' } }}>
                <BoxUnderVideoSection>
                    <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                        Cosa facciamo
                    </Typography>
                    <Typography variant="body2">
                        Welcome to <strong>Wide</strong>: Acceleriamo il successo digitale delle PMI e dei liberi professionisti tra  La Spezia, Massa e Carrara.
                    </Typography>
                    <VerticalLine />
                </BoxUnderVideoSection>

                <BoxUnderVideoSection>
                    <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                        I nostri servizi
                    </Typography>
                </BoxUnderVideoSection>

                <BoxUnderVideoSection>
                    {services.map((item, i) => (
                        <HoverPreviewItem
                            key={i}
                            label={item.label}
                            videoSrc={item.src}
                            index={i}
                            previewRefs={previewRefs}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </BoxUnderVideoSection>

                <BoxUnderVideoSection>
                    <BoxUnderRow>
                        <Typography variant="h4" sx={{ textDecoration: 'underline' }}>
                            SERVIZI IN DETTAGLIO
                        </Typography>
                        <Link href="/servizi" passHref>
                            <CircleArrowHorizontal />
                        </Link>
                    </BoxUnderRow>
                </BoxUnderVideoSection>

                <BoxUnderVideoSection sx={{ paddingBottom: '4rem' }}>
                    <VerticalLine />
                    <BoxUnderRow>
                        <AnotherBoxVideo autoPlay muted loop playsInline preload="auto">
                            <source src="/assets/videos/mockup_5.mp4" type="video/mp4" />
                            Il tuo browser non supporta i video.
                        </AnotherBoxVideo>
                    </BoxUnderRow>
                    <BoxUnderRow>
                        <Typography variant="h4" sx={{ textDecoration: 'underline' }}>
                            VAI AL QUIZ
                        </Typography>
                        <Link href="/quiz" passHref>
                            <CircleArrowHorizontal />
                        </Link>
                    </BoxUnderRow>
                </BoxUnderVideoSection>
            </UnderVideoSection>

            {/**
       * Footer con video e overlay
       */}
            <VideoFooter
                videoRef={footerVideoRef}
                videoSrc="/assets/videos/loop.mp4"
            />
        </>
    );
}