import { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import QuestionCard from '../components/QuestionCard';
import QuizResults from '../components/QuizResults';
import { UnderVideoSection } from '@/components/Commons/CommonsComponents';
import Navbar from '@/components/Navbar copy/Navbar';

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [overallResult, setOverallResult] = useState(null);
    const [isRetakeBlocked, setIsRetakeBlocked] = useState(false);

    // Blocca tentativi multipli tramite localStorage
    useEffect(() => {
        const hasTakenQuiz = localStorage.getItem('hasTakenQuiz');
        if (hasTakenQuiz) {
            setIsRetakeBlocked(true);
        }
    }, []);

    // Recupera le domande dall’API
    useEffect(() => {
        const fetchQuestions = async () => {
            const res = await fetch('/api/questions');
            const data = await res.json();
            setQuestions(data);
        };
        fetchQuestions();
    }, []);

    const handleAnswerSelect = (questionId, answer) => {
        setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    };

    const handleSubmitQuiz = async () => {
        localStorage.setItem('hasTakenQuiz', 'true');
        const res = await fetch('/api/quiz', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answers }),
        });
        const result = await res.json();
        setOverallResult(result);
        setSubmitted(true);
    };

    if (isRetakeBlocked) {
        return (
            <Container sx={{ p: 4 }}>
                <Typography variant="h4">Hai già effettuato il quiz</Typography>
                {overallResult && (
                    <Typography variant="h6">
                        Risultato: {overallResult.score} / {overallResult.total}
                    </Typography>
                )}
            </Container>
        );
    }

    return (
        <>
            <Navbar />
            <UnderVideoSection>
                <Container sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Quiz sul Livello Digitale
                    </Typography>
                    {!submitted ? (
                        <>
                            {questions.map((q) => (
                                <QuestionCard
                                    key={q.id}
                                    questionData={q}
                                    onAnswerSelect={handleAnswerSelect}
                                />
                            ))}
                            <Box sx={{ mt: 2 }}>
                                <Button variant="contained" onClick={handleSubmitQuiz} size="large">
                                    Invia Quiz
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <QuizResults
                            overallScore={overallResult.score}
                            total={overallResult.total}
                        />
                    )}
                </Container>
            </UnderVideoSection>
        </>
    );
};

export default QuizPage;