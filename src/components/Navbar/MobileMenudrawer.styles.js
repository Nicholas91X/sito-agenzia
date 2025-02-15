import { Box, Button, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: "50%",
        [theme.breakpoints.down('md')]: {
            width: "75%",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: alpha(theme.palette.primary.main, 0.8),
        padding: "20px",
    },
}));

export const StyledButton = styled(Button)(({ theme, active }) => ({
    border: '1px solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: '20px',
    justifyContent: 'flex-start',
    padding: '10px 20px',
    textTransform: 'none',
    minWidth: '75%',
    margin: '1rem 0',
    transition: 'transform 0.3s ease, color 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    ...(active && {
        color: theme.palette.text.primary,
        borderLeft: '4px solid',
        borderColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.main,
    }),
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1
}));

export const StyledLogoContainer = styled(Box)({
    width: "80%",
    display: "flex",
    justifyContent: "center",
});

export const StyledLogoImage = styled("img")({
    width: "50%",
    maxWidth: "200px",
    borderRadius: "50%",
});

export const StyledLogoContainerNavbar = styled(Box)(({ theme }) => ({
    width: "120px",
    display: "flex",
    justifyContent: "center",
}));