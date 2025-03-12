export default function handler(req, res) {
    const quizQuestions = [
        {
            id: 1,
            question: "Da quanto tempo la tua azienda opera sul mercato?",
            options: ["Più di 10 anni", "5 - 10 anni", "Meno di 5 anni"],
        },
        {
            id: 2,
            question: "Quale delle seguenti affermazioni descrive meglio la tua presenza online attuale?",
            options: ["Ho un sito web professionale e utilizzo attivamente i social media", "Ho un sito web, ma non lo aggiorno regolarmente e uso i social in modo sporadico", "Non dispongo di un sito web o di una presenza online strutturata"],
        },
        {
            id: 3,
            question: "Utilizzi strumenti di analisi (come Google Analytics) per monitorare i risultati delle tue attività online?",
            options: ["Si, li utilizzo regolarmente", "Li uso occasionalmente", "No, non li utilizzo"],
        },
        {
            id: 4,
            question: "Quanto ritieni importante innovare la tua presenza online per rimanere competitivo nel tuo settore?",
            options: ["Fondamentale - il digitale è essenziale per crescere", "Importante, ma ci sono altre priorità", "Non ci ho ancora riflettuto molto"],
        },
        {
            id: 5,
            question: "Se potessi affidarti ad un partner che gestisca totalmente il tuo marketing digitale, quanto sarebbe rilevante per te?",
            options: ["Molto rilevante - mi libererei da incombenze tecniche", "Moderatamente rilevante", "Non lo so"],
        }
    ];
    res.status(200).json(quizQuestions);
}