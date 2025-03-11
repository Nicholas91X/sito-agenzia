import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "leaflet/dist/leaflet.css";
import theme from "../styles/theme";

export default function MyApp({ Component, pageProps }) {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Head>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ThemeProvider>
        </>
    );
}