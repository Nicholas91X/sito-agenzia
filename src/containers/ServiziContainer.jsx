import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import DigitalIcon from '@mui/icons-material/ShowChart';
import SocialIcon from '@mui/icons-material/Share';
import WebIcon from '@mui/icons-material/Web';
import PhotoVideoIcon from '@mui/icons-material/PhotoCamera';
import ConsultIcon from '@mui/icons-material/SupportAgent';
import Navbar from '@/components/Navbar copy/Navbar';
import { UnderVideoSection, VerticalLine } from '@/components/Commons/CommonsComponents';
import VideoFooter from '@/components/VideoFooter/VideoFooter';
import useAutoplayVideos from '@/hooks/useAutoplayVideos';
import TimelineStep from '@/components/VideoContainer/TimelineStep';
import VideoHero from '@/components/VideoHero/VideoHero';

const timelineSteps = [
    {
        title: "Digital Marketing",
        summary: "Strategie personalizzate che aumentano la tua visibilità online.",
        details:
            "Dimentica i tecnicismi: noi ti guidiamo passo dopo passo, sostituendo metodi tradizionali inefficaci con un approccio chiaro e pianificato.",
        icon: <DigitalIcon sx={{ fontSize: '1.5rem', color: 'secondary.other' }} />,
    },
    {
        title: "Social Media Marketing",
        summary: "Costruiamo e gestiamo una presenza social moderna per valorizzare il tuo brand.",
        details:
            "Creiamo contenuti coinvolgenti e monitoriamo i risultati in modo trasparente, per farti sembrare sempre al passo coi tempi.",
        icon: <SocialIcon sx={{ fontSize: '1.5rem', color: 'secondary.other' }} />,
    },
    {
        title: "Creazione Siti Web",
        summary: "Realizziamo siti web moderni, funzionali e curati nei dettagli.",
        details:
            "Un design professionale che rafforza la tua immagine e semplifica l’esperienza online, trasformando i visitatori in clienti.",
        icon: <WebIcon sx={{ fontSize: '1.5rem', color: 'secondary.other' }} />,
    },
    {
        title: "Foto e Video Professionali",
        summary: "Contenuti visivi di alta qualità per raccontare la tua storia.",
        details:
            "Immagini e video che catturano l’attenzione e comunicano professionalità in modo autentico.",
        icon: <PhotoVideoIcon sx={{ fontSize: '1.5rem', color: 'secondary.other' }} />,
    },
    {
        title: "Consulenza e Ottimizzazione",
        summary: "Supporto costante per migliorare i tuoi strumenti digitali.",
        details:
            "Ti accompagniamo nella scelta delle migliori strategie, fornendoti chiarezza e un approccio strutturato per pianificare il tuo futuro online.",
        icon: <ConsultIcon sx={{ fontSize: '1.5rem', color: 'secondary.other' }} />,
    },
];

export default function ServicesTimeline() {

    const theme = useTheme();

    const mainVideoRef = useRef(null);
    const footerVideoRef = useRef(null);

    useAutoplayVideos([mainVideoRef, footerVideoRef]);

    useEffect(() => {
        if (mainVideoRef.current) {
            mainVideoRef.current.playbackRate = 0.85;
        }
        if (footerVideoRef.current) {
            footerVideoRef.current.playbackRate = 0.5;
        }
    }, []);

    const handleScrollDown = () => {
        const offset = window.innerHeight * 0.8;
        window.scrollBy({ top: offset, left: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar />
            <VideoHero
                videoRef={mainVideoRef}
                videoSrc="/assets/videos/mockup.mp4"
                titleText="Diamo visibilità al tuo lavoro"
                onScrollDown={handleScrollDown}
            />

            <UnderVideoSection sx={{ paddingTop: '4rem', backgroundColor: '#000', color: '#fff' }}>
                <Box sx={{ width: '90%', maxWidth: 1000, mx: 'auto', py: 4, padding: { xs: '0 1rem', sm: '0 3rem', md: '0 10rem', lg: '0 5rem', xl: '0 10rem' } }}>
                    <Box sx={{ marginBottom: '2rem', padding: '2rem', width: '100%' }}>
                        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', }}>
                            I nostri Servizi
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                            Noi di  Wide sappiamo che il mondo digitale può generare confusione e frustrazione.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                            Molti imprenditori locali si sentono sopraffatti da metriche incomprensibili e hanno già sprecato budget in soluzioni inefficaci.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                            Noi trasformiamo queste sfide in opportunità, offrendo servizi studiati per creare le condizioni ideali per la crescita del tuo business.
                        </Typography>
                    </Box>
                </Box>
            </UnderVideoSection>
            <UnderVideoSection sx={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
                <Box sx={{ width: '90%', maxWidth: 1000, mx: 'auto', py: 4, padding: { xs: '0 1.5rem', sm: '0 3rem', md: '0 10rem', lg: '0 10rem', xl: '0 15rem' } }}>
                    {/* Titolo principale */}
                    <Box sx={{ marginBottom: {sm: '2rem', lg: '4rem'}, width: '100%' }}>
                        <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
                            Il Sentiero del Successo
                        </Typography>
                    </Box>
                    <VerticalLine />
                    {/* Linea verticale della timeline */}
                    <Box sx={{ paddingTop: '2rem', position: 'relative', ml: '1rem', mb: 4, mt: { sm: 6, lg: 8 } }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '0',
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                backgroundColor: theme.palette.secondary.third,
                            }}
                        />
                        <Box>
                            {timelineSteps.map((step, index) => (
                                <TimelineStep key={index} step={step} />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </UnderVideoSection>
            {/* Footer */}
            < VideoFooter
                videoRef={footerVideoRef}
                videoSrc="/assets/videos/loop.mp4"
            />
        </>
    );
}