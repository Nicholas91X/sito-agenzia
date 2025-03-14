import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    maxWidth: '100vw',
    height: '100vh',
}));

// Contenitore per il video con aspect ratio 16:9
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

// StyledVideo con le proprietà richieste
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

export const BoxVideoFooter = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    minHeight: '20vh',
    overflow: 'hidden',
}));

export const FooterVideo = styled('video')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
});

export const AnotherBoxVideo = styled('video')({
    objectFit: 'cover',
    width: '100%',
    height: '20vh',
    marginBottom: '1rem',
    '@media screen and (min-width:1024px)': {
        width: '50%',
        height: '40vh',
    },
});

// Overlay sopra il video
export const FooterOverlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1,
}));

export const FooterContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
}));


// Overlay per eventuali contenuti sovrapposti
export const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
}));

export const StyledH1 = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    width: '80%',
    height: '100%',
    textAlign: 'center',
    padding: theme.spacing(2),
    color: theme.palette.secondary.main,
    top: '15%',
    '@media screen and (max-width:768px)': {
        fontSize: '1.75rem',
    },
}));

export const ScrollIndicatorContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: theme.spacing(4),
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '0.75rem',
    letterSpacing: '2px',
}));

export const CircleArrow = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '2rem',
    height: '2rem',
    border: '1px solid #fff',
    borderRadius: '50%',
    marginBottom: '0.5rem',
    // Animazione "pulse"
    animation: 'pulse 2s infinite ease-in-out',
    '@keyframes pulse': {
        '0%': { transform: 'scale(1)', opacity: 1 },
        '50%': { transform: 'scale(1.1)', opacity: 0.5 },
        '100%': { transform: 'scale(1)', opacity: 1 },
    },
    // Pseudo-elemento per la linea verticale
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-6px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px',
        height: '1rem',
        background: '#fff',
    },
    // Pseudo-elemento per la punta della freccia
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 'calc(-6px + 1rem)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 0,
        height: 0,
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        borderTop: '4px solid #fff',
    },
    '&:hover': {
        borderColor: 'orange',
        '&::before, &::after': {
            background: theme.palette.secondary.other,
            borderTopColor: theme.palette.secondary.other,
        },
    },
}));

export const UnderVideoSection = styled(Box)(({ theme }) => ({
    padding: '2rem 2rem 0 2rem',
    '@media screen and (min-width:768px)': {
        padding: '2rem 2.5rem 0 2.5rem',
    },
    '@media screen and (min-width:1024px)': {
        padding: '2rem 3rem 0 3rem',
    },
    '@media screen and (min-width:1200px)': {
        padding: '2rem 10rem 0 10rem',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default_2,
}));

export const BoxUnderVideoSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    color: theme.palette.text.third,
    textAlign: 'center',
    gap: theme.spacing(1),
    marginTop: theme.spacing(4),
}));

export const BoxUnderRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: theme.palette.text.third,
    textAlign: 'center',
    gap: theme.spacing(3),
}));

export const VerticalLine = styled(Box)(({ theme }) => ({
    width: '1px',                // Spessore della linea
    height: '80px',              // Altezza desiderata
    backgroundColor: '#000',     // Colore (puoi usare theme.palette.text.primary se vuoi)
    margin: '16px auto',         // Margini verticali e centratura orizzontale
    color: theme.palette.text.third,
}));

export const HoverPreviewContainer = styled(Box)({
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    '&:hover .preview': {
        opacity: 1,
        visibility: 'visible',
        transform: 'translate(-50%, -10px)',
    },
});

export const PreviewText = styled(Typography)(({ theme }) => ({
    fontSize: '1.1rem',
    '@media screen and (min-width:768px)': {
        fontSize: '1.3rem',
    },
    '@media screen and (min-width:1024px)': {
        fontSize: '1.6rem',
    },
    '@media screen and (min-width:1200px)': {
        fontSize: '2rem',
    },
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: theme.palette.text.primary,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem",
    fontFamily: 'Tan Pearl, sans-serif',
    marginBottom: "2rem",
    [theme.breakpoints.up('sm')]: {
        fontSize: "1.8rem",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "2.25rem",
    },
    color: theme.palette.text.primary,
}));

export const SectionText = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontFamily: 'Inter, sans-serif',
    [theme.breakpoints.up('sm')]: {
        fontSize: "1rem",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "1.3rem",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "1.2rem",
    },
    color: theme.palette.text.secondary,
}));

export const PreviewBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    top: '0',
    transform: 'translate(-50%, 10px)',
    width: '160px',
    height: '90px',
    '@media screen and (min-width:1024px)': {
        width: '320px',
        height: '180px',
    },
    backgroundColor: '#000',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    borderRadius: '4px',
    overflow: 'hidden',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    opacity: 0,
    visibility: 'hidden',
    // “triangolo” di puntamento
    '&::before': {
        content: '""',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderBottom: '8px solid #000',
    },
}));

export const PreviewVideo = styled('video')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const CircleArrowHorizontal = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '2rem',
    height: '2rem',
    border: '1px solid #000',
    borderRadius: '50%',
    marginBottom: '0.5rem',
    cursor: 'pointer',
    // Animazione "pulse"
    animation: 'pulse 2s infinite ease-in-out',
    '@keyframes pulse': {
        '0%': { transform: 'scale(1)', opacity: 1 },
        '50%': { transform: 'scale(1.1)', opacity: 0.5 },
        '100%': { transform: 'scale(1)', opacity: 1 },
    },
    // Pseudo-elemento per la linea verticale
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '25%',
        left: '-8px',
        transform: 'rotate(90deg) translateY(-50%)',
        width: '1px',
        height: '1rem',
        background: '#000',
    },
    // Pseudo-elemento per la punta della freccia
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 'calc(-8px + 1rem)',
        left: '30%',
        transform: 'rotate(-90deg) translateX(-70%)',
        width: 0,
        height: 0,
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        borderTop: '4px solid #000',
    },
    '&:hover': {
        borderColor: 'orange',
        '&::before, &::after': {
            background: theme.palette.secondary.other,
            borderTopColor: theme.palette.secondary.other,
        },
    },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',

    '& img': {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
    }
}));

export const QuoteBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    margin: theme.spacing(2, 3),
    backgroundColor: theme.palette.secondary.fourth,
    fontStyle: 'italic',
    color: theme.palette.primary.other,
    borderTop: '2px solid white',   // bordo superiore bianco
    borderBottom: '2px solid black', // bordo inferiore nero
    borderLeft: '2px solid white',
    borderRight: '2px solid black',
}));