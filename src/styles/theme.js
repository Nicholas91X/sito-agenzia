import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let baseTheme = createTheme();
let theme = createTheme({
    palette: {
        primary: {
            main: "#323738",
            other: "#ffffff",
        },
        secondary: {
            main: "#FAE5C8",
            other: "#E68A55",
            third: "#C8B396",
            fourth: "#A6A89A",
        },
        background: {
            default: "#000000",
            white: "#ffffff",
            transparent: "rgba(255, 255, 255, 0.8)",
            paper: "#1e1e1e",
        },
        text: {
            primary: "#323738",
            secondary: "#7D8283",
            third: "#000000",
        },
        error: {
            main: "#cf6679",
        },
        warning: {
            main: "#fbc02d",
        },
        success: {
            main: "#4caf50",
        },
    },

    typography: {
        fontFamily: "Inter, sans-serif",

        h1: {
            fontFamily: "Tan Pearl, sans-serif",
            fontSize: "3.3rem",
            [baseTheme.breakpoints.up("xs")]: {
                fontSize: "1.75rem",
            },
            fontWeight: 600,
        },
        h2: {
            fontFamily: "Tan Pearl, sans-serif",
            fontSize: "2.8rem",
            fontWeight: 400,
        },
        h3: {
            fontFamily: "Tan Pearl, sans-serif",
            fontSize: "2.25rem",
            fontWeight: 500,
        },
        h4: {
            fontFamily: "Tan Pearl, sans-serif",
            fontSize: "1rem",
            [baseTheme.breakpoints.up("xs")]: {
                fontSize: "0.75rem",
            },
            fontWeight: 500,
        },
        h5: {
            fontFamily: "Tan Pearl, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
        },

        body1: {
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            [baseTheme.breakpoints.up("sm")]: {
                fontSize: "1.25rem",
            },
            [baseTheme.breakpoints.up("md")]: {
                fontSize: "2.5rem",
            },
            [baseTheme.breakpoints.up("lg")]: {
                fontSize: "3rem",
            },
            fontWeight: 400,
        },
        body2: {
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            [baseTheme.breakpoints.up("sm")]: {
                fontSize: "1.2rem",
            },
            [baseTheme.breakpoints.up("md")]: {
                fontSize: "1.5rem",
            },
            [baseTheme.breakpoints.up("lg")]: {
                fontSize: "1.25rem",
            },
            fontWeight: 200,
        },
        body3: {
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            [baseTheme.breakpoints.up("sm")]: {
                fontSize: "1rem",
            },
            [baseTheme.breakpoints.up("md")]: {
                fontSize: "1.1rem",
            },
            [baseTheme.breakpoints.up("lg")]: {
                fontSize: "1.2rem",
            },
            fontWeight: 200,
        },
        button: {
            fontFamily: "Tan Pearl, sans-serif",
            fontWeight: 400,
            [baseTheme.breakpoints.up("lg")]: {
                fontSize: "0.75rem",
            },
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Tan Pearl';
          src: url('/fonts/tan-pearl.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
      `,
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;