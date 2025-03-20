import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const CalendlyEmbed = () => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
            setIsLoading(false);
        };
        script.onerror = () => {
            console.error('Calendly widget failed to load');
            setHasError(true);
            setIsLoading(false);
        };
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    if (hasError) {
        return (
            <div style={{ padding: '1rem', textAlign: 'center', color: '#ff0000' }}>
                Il widget Calendly non è stato caricato correttamente. Riprova più tardi o contatta l&apos;assistenza.
            </div>
        );
    }

    return (
        <div style={{ position: 'relative' }}>
            {/* Mostra lo spinner se è in caricamento */}
            {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                    <CircularProgress />
                </div>
            )}
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/widestudiodigitale"
                // data-url="https://calendly.com/widestudiodigitale?hide_gdpr_banner=1"
                data-resize="true"
                style={{ height: '730px', border: '1px solid black', backgroundColor: '#fff' }}
            ></div>
        </div>
    );
};

export default CalendlyEmbed;