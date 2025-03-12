import { useState } from 'react';
import { Paper, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const QuestionCard = ({ questionData, onAnswerSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        onAnswerSelect(questionData.id, event.target.value);
    };

    return (
        <Paper elevation={3} sx={{ p: 2, mb: 2, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4" gutterBottom sx={{ paddingBottom: '1rem', lineHeight: '1.3rem' }}>
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