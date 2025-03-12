import { useEffect } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

const CalendlyEmbed = () => {
    useEffect(() => {
        // Aggiungi lo script di Calendly al caricamento della pagina
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            {/* Importa il CSS necessario */}
            <Head>
                <link
                    href="https://assets.calendly.com/assets/external/widget.css"
                    rel="stylesheet"
                />
            </Head>
            {/* Div contenente il widget: sostituisci data-url con il link del tuo evento */}
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/wide-digitagency"
                style={{ height: '730px' }}
            ></div>
        </>
    );
};

export default CalendlyEmbed;