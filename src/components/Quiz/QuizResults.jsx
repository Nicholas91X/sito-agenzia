import { Paper, Typography } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { UnderVideoSection } from '../Commons/CommonsComponents';
import dynamic from 'next/dynamic';

export function QuizResults({ overallScore, total }) {
    // Importa il componente in modalità client-only
    const CalendlyEmbed = dynamic(
        () => import('../Calendly/CalendlyEmbed'),
        { ssr: false }
    );

    const maxScore = total * 3; // Ogni domanda vale al massimo 3 punti

    // Definiamo entrambi i messaggi (analogia e invito) in un unico blocco if/else
    let messages = { analogy: '', invitation: '' };

    if (overallScore < 5) {
        messages.analogy = "Il tuo punteggio è così basso che persino un Amish risulta più tecnologico.";
        messages.invitation = "Partiamo dalle basi: prenota una consulenza e scopri i primi passi per migliorare, senza promesse da spot.";
    } else if (overallScore === 5) {
        messages.analogy = "Hai raggiunto il minimo indispensabile, come se fossi in bilico tra il mondo analogico e quello digitale.";
        messages.invitation = "Niente slogan patinati: prenota una consulenza e parliamo in modo concreto di come farti notare online.";
    } else if (overallScore >= 6 && overallScore <= 7) {
        messages.analogy = "Con un punteggio intorno a 6-7, inizi a farti strada nel digitale – anche se qualche volta inciampi un po'.";
        messages.invitation = "Lascia da parte le formule preconfezionate: prenota una consulenza e scopri soluzioni pratiche per crescere online.";
    } else if (overallScore >= 8 && overallScore <= 11) {
        messages.analogy = "Il tuo punteggio è solido, come una buona connessione WiFi: c'è equilibrio, ma c'è ancora margine di miglioramento.";
        messages.invitation = "Senza fronzoli e slogan: una consulenza onesta ti aiuterà a trasformare le potenzialità in risultati reali.";
    } else if (overallScore >= 12 && overallScore <= 14) {
        messages.analogy = "Sei quasi un esperto digitale: il tuo punteggio parla chiaro, ma c'è sempre qualcosa di nuovo da imparare.";
        messages.invitation = "Dimentica le formule pubblicitarie: prenota una consulenza per affinare le tue strategie in modo autentico.";
    } else if (overallScore > 14) {
        messages.analogy = "Il tuo punteggio è altissimo, ma anche i migliori possono sempre migliorare – c'è sempre una vetta da scalare.";
        messages.invitation = "Anche chi è in cima sa che serve un confronto reale: prenota una consulenza per portare il tuo digitale oltre ogni limite.";
    }

    return (
        <>
            <Navbar />
            <UnderVideoSection
                sx={{
                    padding: {
                        xs: '2rem 2rem',
                        sm: '2rem 3rem',
                        md: '2rem 5rem',
                        lg: '2rem 5rem',
                        xl: '2rem 10rem',
                    },
                    backgroundImage: "url('/assets/images/trama-servizi-2.webp')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    marginBottom: '5rem',
                }}
            >
                <Paper elevation={3} sx={{ p: 2, mt: 2, backgroundColor: '#e8f4ff' }}>
                    <Typography variant="h5">
                        Risultato: {overallScore} / {maxScore}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                        {messages.analogy}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mt: 2, fontStyle: 'italic' }}>
                        {messages.invitation}
                    </Typography>
                </Paper>
            </UnderVideoSection>
            <CalendlyEmbed style={{ minWidth: '200px' }} />
        </>
    );
};