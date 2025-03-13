import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxVideoFooter = styled('div')(({ theme }) => ({
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
    bottom: -10,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
}));