import { styled } from '@mui/material/styles';
import { IconButton, Box } from '@mui/material';

export const SocialIconsContainer = styled(Box)({
    position: 'absolute',
    bottom: '5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    gap: '0.5rem',
});

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
    // Esempio di stile personalizzato
    color: theme.palette.secondary.main,
}));