import { AppBar, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'transparent',
    height: '10vh',
    width: '100vw',
    boxShadow: 'none',
}));

const getMenuColors = (page, theme) => {
    switch (page) {
        case 'home':
            return {
                color: theme.palette.primary.other,
                hoverColor: theme.palette.secondary.third,
                activeColor: theme.palette.secondary.third,
            };
        case 'chi-siamo':
            return {
                color: theme.palette.background.default,
                hoverColor: theme.palette.secondary.other,
                activeColor: theme.palette.secondary.other,
            };
        case 'servizi':
            return {
                color: theme.palette.background.default,
                hoverColor: theme.palette.secondary.other,
                activeColor: theme.palette.secondary.other,
            };
        case 'contatti':
            return {
                color: theme.palette.primary.other,
                hoverColor: theme.palette.secondary.third,
                activeColor: theme.palette.secondary.third,
            };
        case 'quiz':
            return {
                color: theme.palette.primary.other,
                hoverColor: theme.palette.secondary.other,
                activeColor: theme.palette.secondary.other,
            };
        default:
            return {
                color: theme.palette.text.primary,
                hoverColor: theme.palette.text.secondary,
                activeColor: theme.palette.text.primary,
            };
    }
};

export const StyledMenuButton = styled(Button)(({ theme, active, page }) => {
    const colors = getMenuColors(page, theme);
    return {
        position: 'relative',
        transition: 'transform 0.3s ease, color 0.3s ease',
        textTransform: 'none',
        fontFamily: theme.typography.fontFamily,
        fontSize: '0.8rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '0.7rem',
        },
        color: active === 'true' ? colors.activeColor : colors.color,
        '&:hover': {
            transform: 'scale(1.05)',
            color: colors.hoverColor,
        },
        ...(active === 'true' && {
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: colors.activeColor,
            },
        }),
    };
});

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
    transition: 'transform 0.3s ease',
    fontSize: '1.5rem',
    '&:hover': {
        transform: 'scale(1.2)',
    },
}));

export const StyledHamburgerButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "0.5rem",
    border: "none",
    borderColor: theme.palette.secondary.other,
    transition: 'transform 0.3s ease',
    color: theme.palette.secondary.other,
    '&:hover': {
        transform: 'scale(1.1)',
    },
    zIndex: 1000,
    minWidth: 0,
    padding: 0,
    '@media screen and (max-width:768px)': {
        width: "2rem",
        height: "2rem",
    },
}));