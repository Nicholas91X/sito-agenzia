import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

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
        fontSize: '1.5rem',
    },
    '@media screen and (min-width:1024px)': {
        fontSize: '1.8rem',
    },
    '@media screen and (min-width:1200px)': {
        fontSize: '2rem',
    },
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: theme.palette.text.primary,
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

export const PreviewImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});