import { Paper, Typography } from '@mui/material';

const QuizResults = ({ overallScore, total }) => {
    const maxScore = total * 3; // Ogni domanda vale al massimo 3 punti

    let analogyMessage = '';
    if (overallScore < 5) {
        analogyMessage = "...Yabadabadooo!";
    } else if (overallScore === 5) {
        analogyMessage = "Sei digitale come un Amish: tradizionale e lontano dalle novità tecnologiche.";
    } else if (overallScore >= 6 && overallScore <= 7) {
        analogyMessage = "Sei in una fase iniziale: non proprio Amish, ma ancora alle prime armi nel mondo digitale.";
    } else if (overallScore >= 8 && overallScore <= 11) {
        analogyMessage = "Sei come un Amish che ha scoperto lo smartphone: un ibrido in ascesa!";
    } else if (overallScore >= 12 && overallScore <= 14) {
        analogyMessage = "Sei quasi un guru digitale: hai abbracciato la tecnologia e sai come muoverti nel web.";
    } else if (overallScore > 14) {
        analogyMessage = "Sei digitale come un influencer high-tech: sempre connesso e all'avanguardia!";
    }

    return (
        <Paper elevation={3} sx={{ p: 2, mt: 2, backgroundColor: '#e8f4ff' }}>
            <Typography variant="h5">
                Risultato: {overallScore} / {maxScore}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
                {analogyMessage}
            </Typography>
        </Paper>
    );
};

export default QuizResults;