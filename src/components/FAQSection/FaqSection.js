import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SectionText } from '../VideoContainer/VideoContainer.styles';
import { VerticalLine } from '../Commons/CommonsComponents';
import { motion } from 'framer-motion';

const faqData = [
    {
        question: "Non sono un esperto di digitale, il social media marketing è davvero utile per la mia attività tradizionale?",
        answer: `Assolutamente sì! Anche per le attività più tradizionali, il digital e social media marketing rappresentano oggi strumenti potentissimi. Non si tratta solo di "essere online", ma di intercettare i tuoi clienti dove trascorrono il loro tempo: online. Possiamo aiutarti a raggiungere nuovi clienti, fidelizzare quelli esistenti e aumentare la visibilità della tua attività, anche se hai sempre operato principalmente offline. Il nostro approccio è personalizzato e mirato a tradurre i benefici del digitale in risultati concreti per la tua specifica attività.`,
        index: 1
    },
    {
        question: "Ho sentito dire che il digital marketing è costoso e non sempre porta risultati. È vero?",
        answer: `Come ogni investimento, anche il digital marketing richiede un budget e una strategia ben definita. L'errore comune è pensare che basti "essere sui social" per avere successo. Noi lavoriamo con un approccio strategico, definendo obiettivi misurabili e monitorando costantemente le performance delle campagne. Questo ci permette di ottimizzare gli investimenti e massimizzare il ritorno. Inoltre, esistono soluzioni adatte a diverse fasce di budget, e possiamo trovare insieme quella più efficace per te. Ricorda, il digital marketing è un investimento a medio-lungo termine che mira a costruire una presenza solida e profittevole nel tempo.`,
        index: 2
    },
    {
        question: "Quanto tempo ci vuole per vedere i primi risultati concreti?",
        answer: `Solitamente, per iniziare a vedere risultati tangibili e significativi, è necessario un periodo di almeno 6 mesi di lavoro costante e strategico. Il digital marketing non è una soluzione "magica" immediata, ma un processo di costruzione e ottimizzazione continua. Nei primi mesi ci concentreremo sulla creazione di una solida base, definendo la tua identità online, raggiungendo il tuo pubblico di riferimento e costruendo relazioni. Successivamente, potremo raccogliere i frutti di questo lavoro iniziale in termini di visibilità, lead e conversioni. Saremo trasparenti e ti forniremo report periodici per monitorare i progressi e adattare la strategia in base ai risultati.`,
        index: 3
    },
    {
        question: "Non ho tempo da dedicare ai social media, dovrei comunque investire in questo servizio?",
        answer: `Comprendiamo perfettamente che il tuo tempo sia prezioso e limitato. Proprio per questo, il nostro servizio è pensato per alleggerirti da questo carico. Ci occuperemo noi di gestire operativamente le tue attività di digital e social media marketing, dalla creazione dei contenuti alla gestione delle campagne pubblicitarie, fino all'analisi dei risultati. Tu dovrai dedicarci solo il tempo necessario per approvare le strategie e fornirci il tuo prezioso feedback sulla tua attività e sui tuoi clienti. Il nostro obiettivo è farti risparmiare tempo, permettendoti di concentrarti sul tuo core business, mentre noi ci occupiamo di far crescere la tua presenza online.`,
        index: 4
    },
    {
        question: "Come misurate il successo delle vostre campagne di digital marketing?",
        answer: `La trasparenza e la misurabilità sono fondamentali per noi. Definiamo insieme a te degli indicatori chiave di performance (KPI) specifici per i tuoi obiettivi di business. Questi possono includere, ad esempio, l'aumento del traffico al sito web, la crescita dei follower sui social media, il numero di lead generati, le richieste di preventivo o l'incremento delle vendite. Ti forniremo report periodici, chiari e dettagliati, che illustreranno l'andamento delle campagne, i risultati ottenuti rispetto ai KPI definiti e le azioni correttive intraprese per ottimizzare le performance. Sarai sempre aggiornato e potrai verificare concretamente l'efficacia del nostro lavoro.`,
        index: 5
    },
    {
        question: "Chi si occuperà della creazione dei contenuti per i social media? Dovrò fornire io tutto il materiale?",
        answer: `La creazione di contenuti di qualità e pertinenti è cruciale per il successo del social media marketing. Il nostro team di professionisti creativi si occuperà della produzione di contenuti coinvolgenti e in linea con la tua identità aziendale. Questo include testi, immagini, video e altri formati. Non dovrai fornire tutto il materiale, ma collaboreremo strettamente con te. Avremo bisogno del tuo contributo per comprendere a fondo la tua attività, i tuoi prodotti/servizi e i tuoi clienti. Questo ci permetterà di creare contenuti autentici e di valore, che rispecchino al meglio la tua realtà aziendale e attraggano il tuo pubblico di riferimento.`,
        index: 6
    },
    {
        question: "Ho già investito in altre forme di marketing tradizionale. Come si integra il digital marketing con quello che faccio già?",
        answer: `Il digital marketing non sostituisce necessariamente il marketing tradizionale, ma lo integra e lo potenzia. Possiamo creare sinergie tra le tue attività offline e online, amplificando la portata dei tuoi messaggi e raggiungendo un pubblico più ampio e diversificato. Ad esempio, possiamo utilizzare i social media per promuovere eventi o iniziative che organizzi nella tua attività fisica, oppure per indirizzare traffico qualificato verso il tuo negozio o ufficio. L'obiettivo è creare una strategia di marketing integrata e multicanale, che sfrutti al meglio le potenzialità di ogni strumento per massimizzare i risultati complessivi.`,
        index: 7
    },
];

// Componente riutilizzabile per ogni FAQ
const FaqAccordion = ({ idx, question, answer, expanded, onChange }) => (
    <Accordion expanded={expanded} onChange={onChange} sx={{ padding: { xs: '1rem', sm: '1.3rem', md: '2rem', lg: '2rem', xl: '2rem' }, backgroundColor: '#323738', marginBottom: { xs: '1.3rem', sm: '1.3rem', md: '4rem', lg: '4rem', xl: '4rem' }, border: '1px solid #fff' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header" sx={{ marginBottom: { xs: '1rem', sm: '1rem', md: '3rem', lg: '3rem', xl: '3rem' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <motion.span
                        initial={{ x: 200, scale: 0, opacity: 0 }}
                        animate={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        style={{ display: 'inline-block', verticalAlign: 'middle', textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <Box
                            component="span"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: { xs: '3rem', sm: '4rem' },
                                height: { xs: '3rem', sm: '4rem' },
                                backgroundColor: '#fff',
                                border: '1px solid #000',
                                padding: '0.2rem 0.5rem',
                                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                                fontFamily: 'Tan Pearl',
                                mx: '0.5rem',
                                verticalAlign: 'middle',
                            }}
                        >
                            {idx}
                        </Box>
                    </motion.span>
                </Box>
                <Typography variant="titoliFAQ" sx={{ textAlign: { xs: 'center', sm: 'center' }, fontWeight: 'bold', color: '#fff', lineHeight: { xs: '1.5rem', sm: '1.5rem', md: '2rem', lg: '3rem', xl: '3rem' } }}>
                    {question}
                </Typography>
            </Box>
        </AccordionSummary>
        <AccordionDetails>
            <VerticalLine sx={{ backgroundColor: '#fff', marginBottom: { xs: '4rem', sm: '4rem', md: '6rem', lg: '6rem', xl: '6rem' } }} />
            <SectionText sx={{ color: '#fff', fontWeight: 200 }}>
                {answer.split('. ').map((sentence, index, arr) => (
                    <span key={index}>
                        {sentence}{index !== arr.length - 1 ? '. ' : ''}
                        <br />
                        <br />
                    </span>
                ))}
            </SectionText>
        </AccordionDetails>
    </Accordion>
);

const FaqSection = () => {
    const [expanded, setExpanded] = useState(0);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ mx: 'auto' }}>
            {faqData.map((item, index) => (
                <FaqAccordion
                    key={index}
                    idx={item.index}
                    question={item.question}
                    answer={item.answer}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                />
            ))}
        </Box>
    );
};
export default FaqSection;