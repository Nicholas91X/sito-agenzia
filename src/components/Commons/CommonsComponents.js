import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const VerticalLine = styled(Box)(({ theme }) => ({
    width: '1px',
    height: '80px',
    backgroundColor: '#000',
    margin: '16px auto',
    color: theme.palette.text.third,
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

export const CircleArrowHorizontal = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '2rem',
    height: '2rem',
    border: '1px solid #000',
    borderRadius: '50%',
    marginBottom: '0.5rem',
    cursor: 'pointer',
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

/**
* - LAVAGNA
* - Usa una texture di lavagna (chalkboard.jpg).
* - Font "chalk" se disponibile, o un cursive/handwritten come fallback.
*/
export const ChalkboardQuoteBox = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2.5rem 4rem',
    margin: theme.spacing(2, 3),
    backgroundImage: 'url("/assets/images/chalkboard.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    color: '#fff',
    fontFamily: '"Shadows Into Light", cursive, sans-serif',
    textShadow: '0 1px 2px rgba(0,0,0,0.5)',
    fontStyle: 'italic',
    border: '2px solid #fff',
}));

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