import React, { useEffect, useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import DigitalIcon from '@mui/icons-material/ShowChart';
import SocialIcon from '@mui/icons-material/Share';
import WebIcon from '@mui/icons-material/Web';
import PhotoVideoIcon from '@mui/icons-material/PhotoCamera';
import ConsultIcon from '@mui/icons-material/SupportAgent';
import Navbar from '@/components/Navbar/Navbar';
import { UnderVideoSection, VerticalLine } from '@/components/Commons/CommonsComponents';
import VideoFooter from '@/components/VideoFooter/VideoFooter';
import useAutoplayVideos from '@/hooks/useAutoplayVideos';
import TimelineStep from '@/components/VideoContainer/TimelineStep';
import VideoHero from '@/components/VideoHero/VideoHero';
import { ChalkboardQuoteBox } from '@/components/VideoContainer/VideoContainer.styles';
import FaqSection from '@/components/FAQSection/FaqSection';


const timelineSteps = [
    {
        title: "Digital Marketing",
        summary: "Strategie personalizzate che aumentano la tua visibilità online.",
        details:
            "Ti aiutiamo a raggiungere i clienti giusti con strategie digitali mirate che aumentano la tua visibilità, facendoti trovare da chi conta davvero.",
        icon: <DigitalIcon sx={{ fontSize: '1.5rem', color: 'secondary.other' }} />,
    },
    {
        title: "Social Media Marketing",
        summary: "Costruiamo e gestiamo una presenza social moderna per valorizzare il tuo brand.",
        details:
            "Creiamo per te una presenza social coinvolgente, capace di catturare l’interesse del tuo pubblico e trasformarlo in clienti reali.",
        icon: <SocialIcon sx={{ fontSize: '1.5rem', color: 'secondary.other' }} />,
    },
    {
        title: "Creazione Siti Web",
        summary: "Realizziamo siti web moderni, funzionali e curati nei dettagli.",
        details:
            "Realizziamo il tuo sito web per mostrare la tua professionalità e trasformare i visitatori in contatti reali.",
        icon: <WebIcon sx={{ fontSize: '1.5rem', color: 'secondary.other' }} />,
    },
    {
        title: "Foto e Video Professionali",
        summary: "Contenuti visivi di alta qualità per raccontare la tua storia.",
        details:
            "Ti aiutiamo a mostrare la tua unicità con immagini e video d’impatto che emozionano e restano impressi nella memoria del tuo cliente.",
        icon: <PhotoVideoIcon sx={{ fontSize: '1.5rem', color: 'secondary.other' }} />,
    },
    {
        title: "Consulenza e Ottimizzazione",
        summary: "Supporto costante per migliorare i tuoi strumenti digitali.",
        details:
            "Ti offriamo supporto costante e consulenza personalizzata, accompagnandoti passo dopo passo verso obiettivi concreti e misurabili.",
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

            <UnderVideoSection sx={{ paddingTop: '8rem', backgroundColor: '#000', color: '#fff', paddingBottom: '8rem', }}>
                <Box sx={{ width: '90%', maxWidth: 1000, mx: 'auto', py: 4, padding: { xs: '0 1rem', sm: '0 3rem', md: '0 10rem', lg: '0 5rem', xl: '0 10rem' } }}>
                    <Box sx={{ marginBottom: '2rem', padding: '2rem', width: '100%' }}>
                        <Typography variant="h3" sx={{ mb: 6, textAlign: 'center', }}>
                            Servizio All-inclusive
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                            Consapevoli che il marketing digitale richieda sia competenze tecniche sia tempo, offriamo una gestione chiavi in mano di tutto il processo.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                            Delegare ogni fase ti fa risparmiare tempo e stress, offrendoti massima coerenza nella comunicazione del tuo brand.                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                            Con una regia unitaria, la tua attività ottiene maggiore visibilità e risultati tangibili.
                        </Typography>
                    </Box>
                </Box>
            </UnderVideoSection>

            <UnderVideoSection sx={{ position: 'relative', paddingTop: '12rem', backgroundColor: '#fff', color: '#000', paddingBottom: '4rem', }}>
                <Box sx={{ width: '90%', maxWidth: 1000, mx: 'auto', py: 4, padding: { xs: '0 1rem', sm: '0 3rem', md: '0 10rem', lg: '0 5rem', xl: '0 10rem' } }}>
                    <Box sx={{ marginBottom: '2rem', padding: '2rem', width: '100%' }}>
                        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', }}>
                            Risultati Misurabili
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                            Il digital marketing non è più un costo, ma un investimento tracciabile.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                            Con KPI chiari, report dettagliati e analisi precise, ti dimostriamo il valore di ogni euro investito.
                        </Typography>
                    </Box>
                </Box>

                {/* Box della citazione posizionato esattamente a metà */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90%',
                        maxWidth: '500px',
                        zIndex: 2,
                    }}
                >
                    <ChalkboardQuoteBox elevation={0}>
                        <Typography variant="h5" sx={{ textAlign: 'center', lineHeight: '1.75rem' }}>
                            Non si tratta solo di essere online, ma di farlo nel modo giusto.
                        </Typography>
                    </ChalkboardQuoteBox>
                </Box>
            </UnderVideoSection>

            <UnderVideoSection sx={{ paddingTop: '8rem', backgroundColor: '#000', color: '#fff', paddingBottom: '4rem', }}>
                <Box sx={{ width: '90%', maxWidth: 1000, mx: 'auto', py: 4, padding: { xs: '0 1rem', sm: '0 3rem', md: '0 10rem', lg: '0 5rem', xl: '0 10rem' } }}>
                    <Box sx={{ marginBottom: '2rem', padding: '2rem', width: '100%' }}>
                        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', }}>
                            Tecnologia Innovativa, Servizio Affidabile
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                            Il digitale evolve rapidamente, noi con lui. Ti offriamo soluzioni innovative e all'avanguardia, frutto di costante aggiornamento e passione per il settore. Un team affidabile e competente al tuo fianco, per un futuro digitale solido e di successo.
                        </Typography>
                    </Box>
                </Box>
            </UnderVideoSection>

            <UnderVideoSection sx={{
                paddingTop: '10rem', paddingBottom: '4rem'
            }}>
                <Box sx={{ width: '90%', maxWidth: 1000, mx: 'auto', py: 4, padding: { xs: '0 1.5rem', sm: '0 3rem', md: '0 10rem', lg: '0 10rem', xl: '0 15rem' } }}>
                    {/* Titolo principale */}
                    <Box sx={{ marginBottom: { sm: '2rem', lg: '6rem' }, width: '100%' }}>
                        <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
                            Il Sentiero del Successo
                        </Typography>
                    </Box>
                    <VerticalLine />
                    {/* Linea verticale della timeline */}
                    <Box sx={{ paddingTop: '6rem', position: 'relative', ml: '1rem', mb: 4, mt: { sm: 6, lg: 8 } }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '0',
                                top: 60,
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

            <UnderVideoSection sx={{ paddingTop: '10rem', backgroundImage: 'url("/assets/images/trama-definitiva-8-min.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: '#fff', paddingBottom: '8rem', }}>
                <Box sx={{ width: '90%', mx: 'auto', padding: { xs: '0 1rem', sm: '0 3rem', md: '0 7.5rem', lg: '0 7.5rem', xl: '0 7.5rem' } }}>
                    <Box sx={{ marginBottom: '2rem', width: '100%' }}>
                        <Typography variant="h3" sx={{ mb: 8, textAlign: 'center', }}>
                            Rispondiamo alle tue domande
                        </Typography>
                        <FaqSection />
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