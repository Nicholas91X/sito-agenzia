import { styled } from '@mui/material/styles';
import { IconButton, Box } from '@mui/material';

export const SocialIconsContainer = styled(Box)({
    position: 'absolute',
    bottom: '0%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    gap: '0.5rem',
});

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.secondary.main,
}));