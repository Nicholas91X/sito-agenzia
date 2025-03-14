import { useState } from 'react';
import { Paper, Typography, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { motion } from 'framer-motion';

const QuestionCard = ({ questionData, onAnswerSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        onAnswerSelect(questionData.id, event.target.value);
    };

    return (
        <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: '#f9f9f9' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <motion.span
                    initial={{ x: 200, scale: 0, opacity: 0 }}
                    animate={{ x: 0, scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{ display: 'inline-block', verticalAlign: 'middle', textAlign: 'center', marginBottom: '1rem' }}
                >
                    <Box
                        component="span"
                        sx={{
                            display: 'inline-block',
                            maxWidth: '3rem',
                            maxHeight: '3rem',
                            backgroundColor: '#fff',
                            border: '1px solid #000',
                            padding: '0.2rem 0.5rem',
                            fontSize: '1rem',
                            fontFamily: 'Tan Pearl',
                            mx: '0.5rem',
                            verticalAlign: 'middle',
                        }}
                    >
                        {questionData.id}
                    </Box>
                </motion.span>
                <Typography variant="h6" gutterBottom sx={{ paddingBottom: '1rem' }}>
                    <strong>{questionData.title}</strong>
                </Typography>
            </Box>
            <Typography variant="h4" gutterBottom sx={{ paddingBottom: '1rem', lineHeight: '1.5rem' }}>
                {questionData.question}
            </Typography>
            <RadioGroup
                name={`question-${questionData.id}`}
                value={selectedOption}
                onChange={handleOptionChange}
            >
                {questionData.options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio />}
                        label={
                            <Typography variant="body3" sx={{ paddingBottom: '0.5rem' }}>
                                {option}
                            </Typography>
                        }
                        sx={{ display: 'flex', alignItems: 'flex-end' }}
                    />
                ))}
            </RadioGroup>
        </Paper>
    );
};

export default QuestionCard;