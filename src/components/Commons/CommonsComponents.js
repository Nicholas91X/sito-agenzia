import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';


export const UnderVideoSection = styled(Box)(({ theme }) => ({
    padding: '2rem 2rem 0 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.white,
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

// Fleccia orizzontale di esempio
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

// Eventuale video extra nella sezione
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

// Linea verticale
export const VerticalLine = styled(Box)(({ theme }) => ({
    width: '1px',
    height: '80px',
    backgroundColor: '#000',
    margin: '16px auto',
    color: theme.palette.text.third,
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '500px',
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
    },
}));

export const IconsContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '50vh',
    position: 'relative',
}));