import React, { useRef, useEffect } from 'react';
import useAutoplayVideos from '../hooks/useAutoplayVideos';
import VideoFooter from '../components/VideoFooter/VideoFooter';
import Navbar from '@/components/Navbar/Navbar';
import { BoxUnderVideoSection, UnderVideoSection } from '@/components/Commons/CommonsComponents';
import { SectionText, SectionTitle } from '@/components/VideoContainer/VideoContainer.styles';
import { Box } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HandShakeIcon from '@mui/icons-material/HandShake';

export default function ChiSiamoContainer() {
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

    return (
        <>
            <Navbar />

            {/* Corpo della pagina */}
            <UnderVideoSection sx={{ paddingBottom: '20rem', backgroundImage: "url('/assets/images/trama-definitiva-4-min.png')" }}>
                <BoxUnderVideoSection sx={{ padding: { xs: '0 2rem', sm: '0 5rem', md: '0 15rem', lg: '0 15rem', xl: '0 25rem' } }}>
                    <SectionTitle sx={{ paddingTop: { xs: '5rem' } }}>Chi Siamo</SectionTitle>
                    <SectionText sx={{ textAlign: 'left', color: '#000' }}>Non siamo un’agenzia tradizionale, ma un <strong>gruppo di liberi professionisti</strong> che ha scelto di collaborare in un contesto di piena responsabilità individuale e reputazione personale.</SectionText>
                    <SectionText sx={{ marginTop: '1rem', textAlign: 'left', color: '#000' }}>Il nostro modello di lavoro ci permette di rispondere in prima persona a ogni esigenza: ogni progetto è curato con la massima attenzione, perché ogni professionista porta avanti il proprio impegno e la propria reputazione. Questo approccio garantisce che, in ogni collaborazione, il massimo impegno e la qualità siano al centro di tutto.</SectionText>
                    <SectionText sx={{ marginTop: '1rem', textAlign: 'left', color: '#000' }}>Crediamo fermamente che il <strong>valore del territorio e la conoscenza profonda del contesto locale</strong> siano elementi imprescindibili per realizzare lavori di eccellenza.</SectionText>
                </BoxUnderVideoSection>
            </UnderVideoSection>

            {/* Box di transizione con video in background */}
            <Box
                sx={{
                    position: 'relative',
                    width: '80%',
                    height: '30rem',
                    marginTop: '-15rem',
                    marginBottom: '-15rem',
                    mx: 'auto',
                    overflow: 'hidden',
                    border: '1px solid',
                    borderImage: 'linear-gradient(to bottom, black 50%, white 50%) 1',
                }}
            >
                <video
                    src="/assets/videos/video_chi_siamo.mp4"
                    autoPlay
                    loop
                    muted
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Box>


            <UnderVideoSection sx={{ paddingBottom: '10rem', backgroundColor: '#000', paddingTop: '15rem' }}>
                <BoxUnderVideoSection sx={{ padding: { xs: '0 2rem', sm: '0 5rem', md: '0 15rem', lg: '0 15rem', xl: '0 25rem' } }}>
                    <SectionTitle sx={{ paddingTop: { xs: '5rem' }, color: '#fff' }}>Cosa ci differenzia</SectionTitle>
                    <SectionText sx={{ marginTop: '1rem', textAlign: 'left', color: 'white' }} variant='body2'>Preferiamo concentrarci su <strong>pochi, selezionati clienti</strong>, anziché puntare alla quantità. In questo modo, possiamo dedicare il giusto tempo e le risorse necessarie per <strong>garantire risultati che rispecchino le aspettative</strong> e la fiducia dei nostri partner.</SectionText>
                    <SectionText sx={{ marginTop: '1rem', textAlign: 'left', color: 'white' }} variant='body2'>Se cercate un team che unisca professionalità, trasparenza e un forte legame con il territorio, siete nel posto giusto.</SectionText>
                    <SectionText sx={{ marginTop: '1rem', textAlign: 'left', color: 'white' }} variant='body2'>Creiamo per te strategie di digital marketing personalizzate, ideali per sfruttare al meglio i canali social e il tuo sito web, per far crescere la tua attività.</SectionText>
                    <SectionText sx={{ width: '100%', marginTop: '1rem', textAlign: 'left', color: 'white' }} variant='body2'><strong>Tu concentrati sulla tua attività. Al resto pensiamo noi.</strong></SectionText>
                </BoxUnderVideoSection>
            </UnderVideoSection>
            {/* Grid con 4 colonne: su schermi piccoli le Box vanno in colonna, su md in 2 colonne e già in lg disponibili 2 a 2 */}
            <UnderVideoSection sx={{
                paddingBottom: '10rem',
                backgroundImage: "url('/assets/images/trama-definitiva-3-min.png')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <BoxUnderVideoSection
                    sx={{
                        width: { xs: '90%', md: '66%' },
                        mx: 'auto',
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 8,
                        alignItems: 'start'
                    }}
                >
                    <Box>
                        <InsightsIcon sx={{ fontSize: '3rem', color: 'secondary.fourth', mb: 2 }} />
                        <SectionTitle variant="h2" sx={{ textAlign: 'left', paddingTop: { xs: '2rem' } }}>
                            Guida Completa e Personalizzata
                        </SectionTitle>
                        <SectionText sx={{ textAlign: 'left' }}>
                            Ti seguiamo passo dopo passo, eliminando l'incertezza e permettendoti di concentrarti sul tuo core business.
                        </SectionText>
                    </Box>
                    <Box>
                        <TaskAltIcon sx={{ fontSize: '3rem', color: 'secondary.fourth', mb: 2 }} />
                        <SectionTitle variant="h2" sx={{ textAlign: 'left', paddingTop: { xs: '2rem' } }}>
                            Risultati Misurabili e Concreti
                        </SectionTitle>
                        <SectionText sx={{ textAlign: 'left' }} variant="body2">
                            Il nostro approccio trasparente ti garantisce obiettivi chiari e report dettagliati, trasformando il sito e i social in strumenti efficaci per generare contatti, visite e vendite.
                        </SectionText>
                    </Box>
                    <Box>
                        <AutoAwesomeIcon sx={{ fontSize: '3rem', color: 'secondary.fourth', mb: 2 }} />
                        <SectionTitle variant="h2" sx={{ textAlign: 'left', paddingTop: { xs: '2rem' } }}>
                            Immagine al Passo coi Tempi
                        </SectionTitle>
                        <SectionText sx={{ textAlign: 'left' }} variant="body2">
                            Con un sito web curato e una presenza social professionale, darai al tuo business l'immagine di innovazione che attira anche le nuove generazioni di consumatori.
                        </SectionText>
                    </Box>
                    <Box>
                        <HandShakeIcon sx={{ fontSize: '3rem', color: 'secondary.fourth', mb: 2 }} />
                        <SectionTitle variant="h2" sx={{ textAlign: 'left', paddingTop: { xs: '2rem' } }}>
                            Soluzioni Chiavi in Mano
                        </SectionTitle>
                        <SectionText sx={{ textAlign: 'left' }} variant="body2">
                            Non dovrai più preoccuparti dei tecnicismi o delle strategie confuse. Noi gestiamo tutto, dal digital marketing alla creazione di contenuti, orientando strategie studiate per creare le condizioni ideali per la crescita del tuo business.
                        </SectionText>
                    </Box>
                </BoxUnderVideoSection>
            </UnderVideoSection>
            {/* Footer */}
            < VideoFooter
                videoRef={footerVideoRef}
                videoSrc="/assets/videos/loop.mp4"
            />
        </>
    );
}