import { useState, useEffect, useRef } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import QuestionCard from '../components/Quiz/QuestionCard';
import QuizResults from '../components/Quiz/QuizResults';
import { UnderVideoSection } from '@/components/Commons/CommonsComponents';
import Navbar from '@/components/Navbar copy/Navbar';
import { motion } from 'framer-motion';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VideoFooter from '@/components/VideoFooter/VideoFooter';
import useAutoplayVideos from '@/hooks/useAutoplayVideos';
import CalendlyEmbed from '@/components/Calendly/CalendlyEmbed';



const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [overallResult, setOverallResult] = useState(null);
    const [isRetakeBlocked, setIsRetakeBlocked] = useState(false);
    const [resetCounter, setResetCounter] = useState(0);

    const footerVideoRef = useRef(null);

    useAutoplayVideos([footerVideoRef]);

    useEffect(() => {
        footerVideoRef.current.playbackRate = 0.5;
    }, []);

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
        localStorage.setItem('score', result.score)
        localStorage.setItem('total', (result.total * 3))
        setOverallResult(result);
        setSubmitted(true);
    };

    const handleClear = () => {
        setAnswers({});
        setResetCounter((prev) => prev + 1);
    };

    if (isRetakeBlocked) {
        return (
            <>
                <Navbar />
                <UnderVideoSection
                    sx={{
                        padding: {
                            xs: '4rem 0',
                            sm: '4rem 5rem',
                            md: '4rem 15rem',
                            lg: '4rem 15rem',
                            xl: '4rem 25rem',
                        },
                        backgroundImage: "url('/assets/images/trama-servizi-2.webp')",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <Container sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h4" sx={{ marginBottom: '2rem' }}>Hai già effettuato il quiz</Typography>
                        <Typography variant="h5">
                            Risultato: {localStorage.getItem('score')} / {localStorage.getItem('total')}
                        </Typography>
                    </Container>
                    <CalendlyEmbed style={{ minWidth: '200px' }} />
                </UnderVideoSection>
                <VideoFooter
                    videoRef={footerVideoRef}
                    videoSrc="/assets/videos/loop.mp4"
                />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <UnderVideoSection
                sx={{
                    padding: {
                        xs: '4rem 0',
                        sm: '4rem 5rem',
                        md: '4rem 15rem',
                        lg: '4rem 15rem',
                        xl: '4rem 25rem',
                    },
                    backgroundImage: "url('/assets/images/trama-definitiva-3.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <Container sx={{ p: 4 }}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            textAlign: 'center',
                            paddingBottom: {
                                xs: '1rem',
                                sm: '2rem',
                                md: '3rem',
                                lg: '4rem',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 2 }}
                            >
                                <HelpOutlineIcon sx={{ fontSize: '2.5rem', mb: 2 }} />
                            </motion.div>
                            Quiz sul Livello Digitale
                        </Box>
                    </Typography>
                    {!submitted ? (
                        <>
                            {questions.map((q) => (
                                <QuestionCard
                                    key={`${q.id}-${resetCounter}`}
                                    questionData={q}
                                    onAnswerSelect={handleAnswerSelect}
                                />
                            ))}
                            <Box sx={{ mt: 5, display: 'flex', justifyContent: 'flex-start', gap: 3 }}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleSubmitQuiz}
                                    size="large"
                                >
                                    Invia
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClear}
                                    size="large"
                                >
                                    Reset
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
            <VideoFooter
                videoRef={footerVideoRef}
                videoSrc="/assets/videos/loop.mp4"
            />
        </>
    );
};

export default QuizPage;