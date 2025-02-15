import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'hidden'
}));

// Wrapper per l'area video
export const VideoWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100vw',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    padding: '10rem auto',
}));

export const StyledTypography = styled(Typography)(({ theme, fontSize }) => ({
    fontSize: fontSize || "1rem",
    textAlign: "center",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: fontSize || "1rem",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: fontSize || "1.1rem",
    }
}));

export const ServiceCardContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    padding: "2rem",
    borderRadius: "1rem",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)",
    },
}));

export const ServicesGridContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    padding: "2rem",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "2rem",
}));

export const PaperServizi = styled(Paper)(({ theme }) => ({
    maxWidth: "90vw",
    maxHeight: "75vh",
    width: "100%",
    padding: "3rem",
    textAlign: "center",
    borderRadius: "1rem",
    backgroundColor: "rgba(156, 39, 176, 0.2)",
    color: "white",
    /* Nasconde visivamente la scrollbar ma mantiene lo scroll */
    overflowY: "auto",
    scrollbarWidth: "none", // Firefox
    "-ms-overflow-style": "none", // Edge

    /* Per Chrome, Safari e altri browser WebKit */
    "&::-webkit-scrollbar": {
        display: "none"
    }
}));