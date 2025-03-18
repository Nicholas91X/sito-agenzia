import { useEffect } from 'react';

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
            {/* Div contenente il widget: sostituisci data-url con il link del tuo evento */}
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/wide-digitagency"
                style={{ height: '730px', border: '1px solid black', backgroundColor: '#fff' }}
            ></div>
        </>
    );
};

export default CalendlyEmbed;