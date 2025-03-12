export default function handler(req, res) {
    if (req.method === 'POST') {
        const { answers } = req.body;

        // Dati delle domande (senza campo "correct")
        const quizQuestions = [
            {
                id: 1,
                question: "Da quanto tempo la tua azienda opera sul mercato?",
                options: ["Più di 10 anni", "5 - 10 anni", "Meno di 5 anni"],
            },
            {
                id: 2,
                question: "Quale delle seguenti affermazioni descrive meglio la tua presenza online attuale?",
                options: [
                    "Ho un sito web professionale e utilizzo attivamente i social media",
                    "Ho un sito web, ma non lo aggiorno regolarmente e uso i social in modo sporadico",
                    "Non dispongo di un sito web o di una presenza online strutturata"
                ],
            },
            {
                id: 3,
                question: "Utilizzi strumenti di analisi (come Google Analytics) per monitorare i risultati delle tue attività online?",
                options: ["Si, li utilizzo regolarmente", "Li uso occasionalmente", "No, non li utilizzo"],
            },
            {
                id: 4,
                question: "Quanto ritieni importante innovare la tua presenza online per rimanere competitivo nel tuo settore?",
                options: [
                    "Fondamentale - il digitale è essenziale per crescere",
                    "Importante, ma ci sono altre priorità",
                    "Non ci ho ancora riflettuto molto"
                ],
            },
            {
                id: 5,
                question: "Se potessi affidarti ad un partner che gestisca totalmente il tuo marketing digitale, quanto sarebbe rilevante per te?",
                options: [
                    "Molto rilevante - mi libererei da incombenze tecniche",
                    "Moderatamente rilevante",
                    "Non lo so"
                ],
            }
        ];

        let totalScore = 0;
        let detailedResults = [];

        quizQuestions.forEach((q) => {
            const userAnswer = answers[q.id];
            // Calcola il punteggio: 3 per la prima opzione, 2 per la seconda e 1 per la terza
            const answerIndex = q.options.findIndex(option => option === userAnswer);
            const answerScore = answerIndex !== -1 ? 3 - answerIndex : 0;
            totalScore += answerScore;

            detailedResults.push({
                id: q.id,
                question: q.question,
                userAnswer,
                score: answerScore,
            });
        });

        res.status(200).json({
            score: totalScore,
            total: quizQuestions.length,
            details: detailedResults,
        });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}