import { Box, Button, ListItem, ListItemText } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Wrapper per l'area video
export const VideoWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100vw',
    height: '90vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

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
    cursor: 'pointer'
}));

export const BookingButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: `${theme.palette.primary.main}`,
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: '10px 50px',
    borderRadius: '50px',
    position: 'absolute',
    bottom: '5%',
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    }
}));

export const VideoMenuBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    right: '2vw',
    top: '50%',
    transform: 'translateY(-50%)',
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
    cursor: 'pointer',
    borderTopLeftRadius: '50px',
    borderBottomLeftRadius: '50px',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
}));

// StyledListItemText mantiene l'effetto wave per il testo (desktop)
export const StyledListItemText = styled(ListItemText)(({ theme, active }) => ({
    position: 'relative',
    padding: '5px 20px',
    textAlign: 'center',
    fontWeight: active ? 'bold' : 'normal',
    color: 'white',
    ...(active
        ? {
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: `1px solid ${theme.palette.secondary.main}`,
                borderTopLeftRadius: '50px',
                borderBottomLeftRadius: '50px',
            },
        }
        : {
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, transparent 30%, ${theme.palette.secondary.main} 50%, transparent 70%)`,
                backgroundSize: '300%',
                animation: `${wave} 5s linear infinite`,
                opacity: 0.7,
                pointerEvents: 'none',
                mixBlendMode: 'overlay',
                borderTopLeftRadius: '50px',
                borderBottomLeftRadius: '50px',
            },
        }),
}));

// Definizione dell'animazione "wave"
const wave = keyframes`
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  `;

// StyledVideoMenuIcon per le icone in modalità mobile
export const StyledVideoMenuIcon = styled('div')(({ theme, active }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: active ? '1.5rem' : '1rem',
    width: active ? '50px' : '40px',
    height: active ? '50px' : '40px',
    color: active ? theme.palette.primary.main : 'white',
    transition: 'transform 0.3s ease, color 0.3s ease',
    '&:hover': {
        transform: 'scale(1.2)',
        color: theme.palette.primary.main,
    },
    // Se non attivo, applica l'effetto wave; se attivo, mostra un bordo
    ...(active
        ? {
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: '50%',
            },
        }
        : {
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(90deg, transparent 30%, ${theme.palette.secondary.main} 50%, transparent 70%)`,
                backgroundSize: '300%',
                animation: `${wave} 5s linear infinite`,
                opacity: 0.7,
                pointerEvents: 'none',
                mixBlendMode: 'overlay',
                border: `1px solid ${theme.palette.secondary.main}`,
                borderRadius: '50%',
            },
        }),
}));