import { AppBar, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'black',
    height: '10vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '2px solid',
    borderBottomColor: theme.palette.primary.main,
}));

export const StyledMenuButton = styled(Button)(({ theme, active }) => ({
    position: 'relative',
    transition: 'transform 0.3s ease, color 0.3s ease',
    fontSize: '1rem',
    [theme.breakpoints.down('lg')]: {
        fontSize: '0.7rem',
    },
    '&:hover': {
        transform: 'scale(1.05)',
        color: theme.palette.primary.main,
    },
    ...(active && {
        color: theme.palette.primary.main,
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: theme.palette.primary.main,
        },
    }),
}));

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.2)',
        color: theme.palette.primary.main,
    },
}));

export const StyledHamburgerButton = styled(IconButton)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
    position: "fixed",
    top: "22%",
    right: "30px",
    borderRadius: "50%",
    border: "2px solid",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.1)',
        backgroundColor: theme.palette.primary.dark,
    },
    zIndex: 1000
}));