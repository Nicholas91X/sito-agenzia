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
            <Typography variant="h6" gutterBottom>
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
                        label={option}
                    />
                ))}
            </RadioGroup>
        </Paper>
    );
};

export default QuestionCard;