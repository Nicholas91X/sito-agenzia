import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

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