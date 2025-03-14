import { AppBar, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'transparent',
    height: '10vh',
    width: '100vw',
    boxShadow: 'none',
}));

export const StyledMenuButton = styled(Button)(({ theme, active, pathboolean }) => ({
    position: 'relative',
    transition: 'transform 0.3s ease, color 0.3s ease',
    textTransform: 'none',
    fontFamily: theme.typography.fontFamily,
    fontSize: '0.8rem',
    [theme.breakpoints.down('lg')]: {
        fontSize: '0.7rem',
    },
    color: pathboolean = 'true' ? theme.palette.primary.main : theme.palette.primary.other,
    '&:hover': {
        transform: 'scale(1.05)',
        color: pathboolean = 'true' ? theme.palette.primary.other : theme.palette.secondary.third,
    },
    ...((active === 'true') && {
        color: pathboolean = 'true' ? theme.palette.primary.other : theme.palette.secondary.third,
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: pathboolean = 'true' ? theme.palette.primary.other : theme.palette.secondary.third,
        },
    }),
}));

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
    border: "1px solid",
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