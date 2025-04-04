import React, { useEffect, useRef } from 'react';
import "leaflet/dist/leaflet.css";
import { useTheme } from '@emotion/react';
import { Box, IconButton, Typography } from '@mui/material';
import Navbar from '@/components/Navbar/Navbar';
import VideoHero from '@/components/VideoHero/VideoHero';
import VideoFooter from '@/components/VideoFooter/VideoFooter';
import useAutoplayVideos from '@/hooks/useAutoplayVideos';
import CalendlyEmbed from '@/components/Calendly/CalendlyEmbed';
import { ChalkboardQuoteBox, UnderVideoSection } from '@/components/Commons/CommonsComponents';
import Link from 'next/link';

// Icone MUI
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function ContattiContainer() {
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

    // Primo blocco: Social links
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/widestudiodigitale/',
            icon: <LinkedInIcon sx={{ fontSize: { md: 16, lg: 36 } }} />,
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/wide_studiodigitale?igsh=MXR5dWZ6bnk1Y3VidA==',
            icon: <InstagramIcon sx={{ fontSize: { md: 16, lg: 36 } }} />,
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/share/1AHQBPjrD8/',
            icon: <FacebookIcon sx={{ fontSize: { md: 16, lg: 36 } }} />,
        },
    ];

    // Secondo blocco: Telefono e Mail
    const phoneAndMail = [
        {
            name: 'Email',
            url: 'mailto:widestudiodigitale@gmail.com',
            icon: <EmailIcon sx={{ fontSize: { md: 16, lg: 36 }, color: '#000' }} />,
        },
        {
            name: 'Telefono',
            url: 'tel:3271562265',
            icon: <PhoneIcon sx={{ fontSize: { md: 16, lg: 36 }, color: '#000' }} />,
        },
    ];

    return (
        <>
            {/* Navbar e Hero */}
            <Navbar />
            <section>
                <VideoHero
                    videoRef={mainVideoRef}
                    videoSrc="/assets/videos/video_contatti-2.mp4"
                    titleText="Contattaci"
                    onScrollDown={handleScrollDown}
                />
            </section>

            {/* Sezione "Conosciamoci" */}
            <section>
                <UnderVideoSection
                    sx={{
                        paddingTop: '8rem',
                        backgroundColor: '#000',
                        color: '#fff',
                        paddingBottom: '8rem',
                    }}
                >
                    <Box
                        sx={{
                            width: '90%',
                            maxWidth: 1000,
                            mx: 'auto',
                            padding: {
                                xs: '0 0.5rem',
                                sm: '0 3rem',
                                md: '0 10rem',
                                lg: '0 5rem',
                                xl: '0 10rem',
                            },
                        }}
                    >
                        <Box sx={{ marginBottom: '2rem', padding: '1rem', width: '100%' }}>
                            <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
                                Conosciamoci
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                                Far crescere la tua attività sui social media e attirare nuovi clienti richiede tempo, competenze e una strategia mirata, ma ci occupiamo noi di tutto, offrendoti soluzioni su misura per ottenere risultati concreti.
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                                Delegare ogni fase ti fa risparmiare tempo e stress, offrendoti massima coerenza nella comunicazione del tuo brand.
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                                Con una regia unitaria, la tua attività ottiene maggiore visibilità e risultati tangibili.
                            </Typography>
                        </Box>
                    </Box>
                </UnderVideoSection>
            </section>

            {/* Sezione Testo introduttivo e Citazione */}
            <section>
                <UnderVideoSection
                    sx={{
                        position: 'relative',
                        paddingTop: '12rem',
                        backgroundColor: '#fff',
                        color: '#000',
                        paddingBottom: { xs: '4rem', sm: '4rem', md: '4rem', lg: '8rem', xl: '8rem' },
                    }}
                >
                    <Box
                        sx={{
                            width: '90%',
                            maxWidth: 1000,
                            mx: 'auto',
                            padding: {
                                xs: '0 0.5rem',
                                sm: '0 3rem',
                                md: '0 10rem',
                                lg: '0 5rem',
                                xl: '0 10rem',
                            },
                        }}
                    >
                        <Box sx={{ marginBottom: '2rem', padding: '1rem', width: '100%' }}>
                            <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                                Se vuoi scoprire come possiamo aiutarti, scrivici o prenota una consulenza gratuita: insieme costruiremo una strategia efficace per la tua crescita.
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 4, textAlign: 'left' }}>
                                Il tuo lavoro merita di essere conosciuto, e noi siamo qui per farlo arrivare alle persone giuste.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Citazione in overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '0',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '90%',
                            maxWidth: '600px',
                            zIndex: 2,
                        }}
                    >
                        <ChalkboardQuoteBox elevation={0}>
                            <Typography variant="h5" sx={{ textAlign: 'center', lineHeight: '1.75rem' }}>
                                Conosciamo le sfide del mercato locale e sappiamo trasformarle in opportunità reali.
                            </Typography>
                        </ChalkboardQuoteBox>
                    </Box>
                </UnderVideoSection>
            </section>

            {/* Sezione Social */}
            <section>
                <UnderVideoSection
                    sx={{
                        padding: '8rem 0',
                        backgroundColor: '#000',
                        color: '#fff',
                        minHeight: '50vh',
                    }}
                >
                    <Box
                        sx={{
                            width: '90%',
                            maxWidth: 1000,
                            mx: 'auto',
                            py: 4,
                            padding: {
                                xs: '0 1rem',
                                sm: '0 3rem',
                                md: '0 10rem',
                                lg: '0 5rem',
                                xl: '0 10rem',
                            },
                        }}
                    >
                        <Box sx={{ marginBottom: '2rem', padding: '2rem', width: '100%' }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 10,
                                    textAlign: 'center',
                                    fontFamily: 'Tan Pearl',
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                }}
                            >
                                Seguici sui nostri social
                            </Typography>
                            {/* Griglia Cards */}
                            <Box
                                sx={{
                                    display: 'grid',
                                    justifyItems: 'center',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        sm: '1fr',
                                        md: '1fr 1fr 1fr',
                                        lg: '1fr 1fr 1fr',
                                    },
                                    gap: '2rem',
                                    width: 'auto',
                                }}
                            >
                                {socialLinks.map((item) => (
                                    <Box
                                        key={item.name}
                                        component="a"
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            backgroundColor: '#1A1A1A',
                                            p: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 8px 15px rgba(255,255,255,255.5)',
                                            },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: 'Tan Pearl',
                                            maxWidth: { xs: '250px', sm: '300px' },
                                            minWidth: '150px',
                                            border: '1px solid white',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <IconButton sx={{ color: '#fff', mb: 1 }}>
                                            {item.icon}
                                        </IconButton>
                                        <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontWeight: 600,
                                                fontFamily: 'inherit',
                                                fontSize: { xs: '0.5rem', sm: '0.5rem', md: '0.5rem', lg: '0.8rem' },
                                                color: '#fff',
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </UnderVideoSection>
            </section>

            {/* Sezione Telefono e Mail */}
            <section>
                <UnderVideoSection
                    sx={{
                        padding: '8rem 0',
                        backgroundColor: '#fff',
                        color: '#000',
                        minHeight: '50vh',
                    }}
                >
                    <Box
                        sx={{
                            width: '90%',
                            maxWidth: 1000,
                            mx: 'auto',
                            py: 4,
                            padding: {
                                xs: '0 1rem',
                                sm: '0 3rem',
                                md: '0 10rem',
                                lg: '0 5rem',
                                xl: '0 10rem',
                            },
                        }}
                    >
                        <Box sx={{ marginBottom: '2rem', padding: '2rem', width: '100%' }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 10,
                                    textAlign: 'center',
                                    fontFamily: 'Tan Pearl',
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                }}
                            >
                                Oppure contattaci
                            </Typography>
                            <Box
                                sx={{
                                    display: 'grid',
                                    justifyItems: 'center',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        sm: '1fr',
                                        md: '1fr 1fr',
                                        lg: '1fr 1fr',
                                    },
                                    gap: '2rem',
                                }}
                            >
                                {phoneAndMail.map((item) => (
                                    <Box
                                        key={item.name}
                                        component="a"
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            backgroundColor: 'secondary.main',
                                            p: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 8px 15px rgba(0,0,0,0.5)',
                                            },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: 'Tan Pearl',
                                            maxWidth: { xs: '250px', sm: '300px' },
                                            minWidth: '150px',
                                            border: '1px solid black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <IconButton sx={{ color: '#fff', mb: 1 }}>
                                            {item.icon}
                                        </IconButton>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                textAlign: 'center',
                                                fontWeight: 600,
                                                fontFamily: 'inherit',
                                                fontSize: { xs: '0.5rem', sm: '0.5rem', md: '0.5rem', lg: '0.8rem' },
                                                color: '#000',
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </UnderVideoSection>
            </section>

            {/* Sezione Calendly */}
            <section id="consulenza">
                <UnderVideoSection
                    sx={{
                        paddingTop: '8rem',
                        paddingBottom: '8rem',
                        color: '#fff',
                        backgroundImage: "url('/assets/images/trama-definitiva-8-min.png')",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 800,
                            mx: 'auto',
                            py: 4,
                            px: { xs: 2, sm: 4 },
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 4,
                                textAlign: 'center',
                                fontFamily: 'Tan Pearl',
                                fontSize: { xs: '1.5rem', md: '2rem' },
                            }}
                        >
                            Prenota una call
                        </Typography>
                    </Box>
                    <CalendlyEmbed />
                    {/* <MeetingLinkCard
              imageSrc="/assets/images/logo.png"
              title="Prenota una Riunione"
              description="Clicca qui per accedere alla nostra pagina di prenotazione"
              link="https://doodle.com/bp/wide_studiodigitale/consulenza-gratuita-wide"
          /> */}
                </UnderVideoSection>
            </section>
        </>
    );
}