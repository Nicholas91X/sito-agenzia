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

export const PaperChiSiamo = styled(Paper)(({ theme }) => ({
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

export const BoxChiSiamo = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
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