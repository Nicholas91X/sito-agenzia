import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Contenitore per il video in alto (Hero)
 */
export const VideoContainer = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '80vh',
    maxHeight: '515px',
    // Media queries personalizzate
    '@media screen and (min-width:768px)': {
        height: '70vw',
        maxHeight: 'none',
    },
    '@media screen and (min-width:1024px)': {
        height: '70vw',
        maxHeight: '100vh',
    },
    '@media screen and (min-width:1200px)': {
        height: '63vw',
    },
}));

/**
 * Video "hero" effettivo
 */
export const StyledVideo = styled('video')(({ theme }) => ({
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
    top: 0,
    left: 0,
    objectFit: 'cover',
    position: 'absolute',
    zIndex: 0,
    transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    opacity: 1,
    width: '100%',
    height: '100%',
}));

/**
 * Overlay (colore scuro semitrasparente + center text)
 */
export const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
}));

/**
 * Titolo testuale sopra il video
 */
export const StyledH1 = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    width: '80%',
    height: '100%',
    textAlign: 'center',
    padding: theme.spacing(2),
    // Usa il tuo colore secondario o quello che preferisci
    color: theme.palette.secondary.main,
    top: '15%',
    '@media screen and (max-width:768px)': {
        fontSize: '1.50rem',
    },
}));