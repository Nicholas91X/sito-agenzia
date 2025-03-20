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
        justifyContent: "space-around",
        backgroundColor: alpha(theme.palette.primary.main, 0.8),
        paddingTop: "5rem",
    },
}));

export const StyledButton = styled(Button)(({ theme, active }) => ({
    color: "#FAE5C8",
    backgroundColor: "transparent",
    textTransform: 'none',
    minWidth: '75%',
    textTransform: 'uppercase',
    transition: 'transform 0.3s ease, color 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    ...((active === 'true') && {
        borderLeft: '4px solid',
        borderLeftColor: theme.palette.secondary.other,
        color: theme.palette.secondary.other,
    }),
}));

export const StyledBoxMobile = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    marginBottom: '5rem',
}));

export const StyledLogoContainer = styled(Box)({
    width: "50%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
});

export const StyledLogoImage = styled("img")(({ theme }) => ({
    width: "45%",
    maxWidth: "200px",
    border: `1px solid ${theme.palette.secondary.main}`,
}));

export const StyledLogoContainerNavbar = styled(Box)(({ theme }) => ({
    margin: 0,
    width: "100px",
    display: "flex",
    justifyContent: "flex-start",
    top: "1rem",
    left: "1rem",
    position: "fixed",
}));