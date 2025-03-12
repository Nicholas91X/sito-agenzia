import React, { useEffect, useRef } from 'react';
import "leaflet/dist/leaflet.css";
import Navbar from '@/components/Navbar copy/Navbar';
import VideoFooter from '@/components/VideoFooter/VideoFooter';
import { useTheme } from '@emotion/react';
import useAutoplayVideos from '@/hooks/useAutoplayVideos';
import VideoHero from '@/components/VideoHero/VideoHero';
import { UnderVideoSection } from '@/components/Commons/CommonsComponents';
import { Box, IconButton, Typography, TextField, Button } from '@mui/material';

// Icone MUI
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendlyEmbed from '@/components/Calendly/CalendlyEmbed';

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

    // Primo blocco di social
    const socialLinks = [
        {
            name: 'Youtube',
            url: 'https://youtube.com',
            icon: <YouTubeIcon sx={{ fontSize: { md: 16, lg: 36 } }} />,
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com',
            icon: <LinkedInIcon sx={{ fontSize: { md: 16, lg: 36 } }} />,
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com',
            icon: <InstagramIcon sx={{ fontSize: { md: 16, lg: 36 } }} />,
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com',
            icon: <FacebookIcon sx={{ fontSize: { md: 16, lg: 36 } }} />,
        },
    ];

    // Secondo blocco (telefono e mail)
    const phoneAndMail = [
        {
            name: 'Email',
            url: 'mailto:info@miosito.it',
            icon: <EmailIcon sx={{ fontSize: { md: 16, lg: 36 }, color: '#000' }} />,
        },
        {
            name: 'Telefono',
            url: 'tel:+39123456789',
            icon: <PhoneIcon sx={{ fontSize: { md: 16, lg: 36 }, color: '#000' }} />,
        },
    ];

    return (
        <>
            <Navbar />
            <VideoHero
                videoRef={mainVideoRef}
                videoSrc="/assets/videos/mockup_3.mp4"
                titleText="Contattaci"
                onScrollDown={handleScrollDown}
            />

            {/* PRIMO BLOCCO: SOCIAL */}
            <UnderVideoSection
                sx={{ padding: '3rem 0', backgroundColor: '#000', color: '#fff', minHeight: '50vh' }}
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
                            variant="h5" // più piccolo di h3
                            sx={{
                                mb: 4,
                                textAlign: 'center',
                                fontFamily: 'Tan Pearl',
                                fontSize: { xs: '1.5rem', md: '2rem' }, // dimensione ridotta + responsive
                            }}
                        >
                            Seguici sui nostri social
                        </Typography>

                        {/* GRIGLIA DELLE CARDS */}
                        <Box
                            sx={{
                                display: 'grid',
                                // Le cards saranno centrate orizzontalmente
                                justifyItems: 'center',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: '1fr 1fr',
                                    md: '1fr 1fr',
                                    lg: '1fr 1fr 1fr 1fr',
                                },
                                gap: '2rem',
                            }}
                        >
                            {socialLinks.map((item) => (
                                <Box
                                    key={item.name}
                                    sx={{
                                        backgroundColor: '#1A1A1A',
                                        // padding ridotto e responsive
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
                                        // Limiti di larghezza per ridurre dimensioni
                                        maxWidth: { xs: '250px', sm: '300px' },
                                        minWidth: '150px',
                                        border: '1px solid white'
                                    }}
                                >
                                    <IconButton
                                        component="a"
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: '#fff', mb: 1 }}
                                    >
                                        {item.icon}
                                    </IconButton>
                                    <Typography
                                        sx={{
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            fontFamily: 'inherit',
                                            fontSize: { xs: '0.5rem', sm: '0.5rem', md: '0.5rem', lg: '0.8rem' },
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

            {/* SECONDO BLOCCO: TELEFONO E MAIL */}
            <UnderVideoSection
                sx={{ padding: '3rem 0', backgroundColor: '#fff', color: '#000', minHeight: '50vh' }}
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
                                mb: 4,
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
                                // Centra orizzontalmente le card
                                justifyItems: 'center',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: '1fr 1fr',
                                    md: '1fr 1fr',
                                    lg: '1fr 1fr 1fr 1fr',
                                },
                                gap: '2rem',
                            }}
                        >
                            {phoneAndMail.map((item) => (
                                <Box
                                    key={item.name}
                                    sx={{
                                        backgroundColor: 'secondary.third',
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
                                        // Limita larghezza della card
                                        maxWidth: { xs: '250px', sm: '300px' },
                                        minWidth: '150px',
                                        border: '1px solid black'
                                    }}
                                >
                                    <IconButton
                                        component="a"
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ color: '#fff', mb: 1 }}
                                    >
                                        {item.icon}
                                    </IconButton>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            fontFamily: 'inherit',
                                            fontSize: { xs: '0.5rem', sm: '0.5rem', md: '0.5rem', lg: '0.8rem' },
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

            {/* TERZO BLOCCO: CALENDLY */}
            <UnderVideoSection sx={{
                paddingTop: '4rem',
                paddingBottom: '4rem',
                backgroundColor: '#000',
                color: '#fff',
            }}>
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
                <CalendlyEmbed style={{ minWidth: '200px' }} />
            </UnderVideoSection>

            {/* QUARTO BLOCCO: FORM */}
            <UnderVideoSection
                sx={{
                    paddingTop: '4rem',
                    paddingBottom: '4rem',
                    backgroundColor: '#fff',
                    color: '#000',
                }}
            >
                <Box
                    sx={{
                        width: '90%',
                        maxWidth: 800,
                        mx: 'auto',
                        py: 4,
                        px: { xs: 2, sm: 4 },
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            marginBottom: '2rem',
                            padding: '2rem',
                            width: '100%',
                                maxWidth: '300px',
                            backgroundColor: '#000',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                        }}
                    >
                        {/* Titolo form più piccolo */}
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 4,
                                textAlign: 'center',
                                fontFamily: 'Tan Pearl',
                                color: '#fff',
                                fontSize: { xs: '1rem', sm: '1.2rem' },
                            }}
                        >
                            Lasciaci un messaggio
                        </Typography>

                        {/* Form */}
                        <Box
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                fontFamily: 'Tan Pearl'
                            }}
                            onSubmit={(e) => {
                                e.preventDefault();
                                // logica di submit
                            }}
                        >
                            <TextField
                                label="Nome"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    fontFamily: 'inherit',
                                    // Riduci la grandezza del label e del testo interno
                                    '& .MuiInputBase-input': {
                                        fontSize: '0.9rem',
                                        border: '1px solid #fff'
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontSize: '0.85rem',
                                        color: '#fff'
                                    },
                                }}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    fontFamily: 'inherit',
                                    '& .MuiInputBase-input': {
                                        fontSize: '0.9rem',
                                        border: '1px solid #fff'
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontSize: '0.85rem',
                                        color: '#fff'
                                    },
                                }}
                            />
                            <TextField
                                label="Messaggio"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                sx={{
                                    fontFamily: 'inherit',
                                    '& .MuiInputBase-input': {
                                        fontSize: '0.9rem',
                                        border: '1px solid #fff'
                                    },
                                    '& .MuiInputBase-root': {
                                        padding: 0
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontSize: '0.85rem',
                                        color: '#fff'
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{
                                    alignSelf: 'flex-end',
                                    fontFamily: 'inherit',
                                    mt: 1,
                                    fontSize: '0.8rem',
                                }}
                            >
                                Invia
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </UnderVideoSection>

            <VideoFooter
                videoRef={footerVideoRef}
                videoSrc="/assets/videos/loop.mp4"
            />
        </>
    );
}