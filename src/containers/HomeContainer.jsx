import React, { useRef, useEffect, useState } from 'react';
import useAutoplayVideos from '../hooks/useAutoplayVideos';
import VideoHero from '../components/VideoHero/VideoHero';
import VideoFooter from '../components/VideoFooter/VideoFooter';
import { Typography } from '@mui/material';
import Navbar from '@/components/Navbar/Navbar';
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
        { label: 'DIGITAL MARKETING /', src: '/assets/images/preview-1.png' },
        { label: 'SOCIAL MEDIA MARKETING /', src: '/assets/images/preview-2.png' },
        { label: 'WEBSITES /', src: '/assets/images/preview-5.png' },
        { label: 'FOTO & VIDEO /', src: '/assets/images/preview-4.png' },
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
                videoSrc="/assets/videos/mockup_6_shrink.mp4"
                titleText="Welcome Into Digital Era"
                onScrollDown={handleScrollDown}
            />

            {/**
       * Sezione contenuti
       */}
            <UnderVideoSection sx={{
                padding: {
                    xs: '0 1rem 2.5rem 1rem', sm: '0 3rem', md: '0 10rem', lg: '0 5rem 5rem 5rem', xl: '0 10rem',
                },
                backgroundImage: "url('/assets/images/trama-definitiva-6-min.png')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <BoxUnderVideoSection sx={{ padding: { xs: '2rem 0', sm: '0', lg: '0 5rem', xl: '0 5rem' } }}>
                    <Typography variant="h3" sx={{ margin: '2rem 0' }}>
                        Cosa facciamo
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'left', width: '100%' }}>
                        Gestire la tua attività è già una sfida, trovare clienti online non dovrebbe esserlo.
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'left', width: '100%' }}>
                        Noi vogliamo renderti <strong>tutto più semplice.</strong>
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'left', width: '100%' }}>
                        Aiutiamo le aziende e i liberi professionisti di <strong>La Spezia, Massa e Carrara</strong> a ottenere risultati concreti online, trasformando i canali digitali in un&apos;opportunità concreta.
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'left', width: '100%' }}>
                        Creiamo strategie su misura per <strong>aumentare la tua visibilità, attrarre clienti e rafforzare la tua reputazione.</strong>
                    </Typography>
                </BoxUnderVideoSection>

                <BoxUnderVideoSection sx={{ margin: { xs: '2.5rem 0 1.25rem 0', sm: '2.5rem 0 1.25rem 0', lg: '5rem 0 2.5rem 0' } }}>
                    <BoxUnderRow>
                        <Typography variant="h4" sx={{ textDecoration: 'underline', lineHeight: '1.5rem' }}>
                            PRENOTA UNA CONSULENZA GRATUITA
                        </Typography>
                        <Link href="/contatti/#consulenza" passHref>
                            <CircleArrowHorizontal />
                        </Link>
                    </BoxUnderRow>
                </BoxUnderVideoSection>

                <BoxUnderVideoSection>
                    <VerticalLine sx={{ marginBottom: { xs: '4.5rem', lg: '1.5rem' } }} />
                    <Typography variant="h3" sx={{ marginBottom: '1rem', marginTop: { lg: '5rem' } }}>
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

                <BoxUnderVideoSection sx={{ margin: { xs: '2.5rem 0 1.25rem 0', sm: '2.5rem 0 1.25rem 0', lg: '5rem 0 2.5rem 0' } }}>
                    <BoxUnderRow>
                        <Typography variant="h4" sx={{ textDecoration: 'underline', lineHeight: '1.5rem' }}>
                            SERVIZI IN DETTAGLIO
                        </Typography>
                        <Link href="/servizi" passHref>
                            <CircleArrowHorizontal />
                        </Link>
                    </BoxUnderRow>
                </BoxUnderVideoSection>

                <BoxUnderVideoSection sx={{ paddingBottom: '4rem' }}>
                    <VerticalLine sx={{ marginBottom: { xs: '5rem', sm: '5rem', lg: '7rem', xl: '7rem' } }} />
                    <BoxUnderRow>
                        <AnotherBoxVideo autoPlay muted loop playsInline preload="auto">
                            <source src="/assets/videos/mockup_5.mp4" type="video/mp4" />
                            Il tuo browser non supporta i video.
                        </AnotherBoxVideo>
                    </BoxUnderRow>
                    <BoxUnderRow sx={{ marginTop: { xs: '2.5rem', sm: '2.5rem', lg: '5rem', xl: '5rem' } }}>
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