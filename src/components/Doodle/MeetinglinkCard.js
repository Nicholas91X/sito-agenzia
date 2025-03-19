import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

// Componente che accetta:
// - imageSrc: URL del logo (es. Doodle o Google Meet)
// - title: il titolo da mostrare (es. "Prenota una Riunione")
// - description: una breve descrizione (opzionale)
// - link: URL a cui l'utente verrà reindirizzato
const MeetingLinkCard = ({ imageSrc, title, description, link }) => {
    const handleClick = () => {
        window.open(link, '_blank', 'noopener noreferrer');
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                margin: 'auto',
                boxShadow: 3,
                borderRadius: 2,
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: 'scale(1.03)',
                },
            }}
        >
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageSrc}
                    alt={title}
                    sx={{ objectFit: 'contain', padding: 2, backgroundColor: '#f9f9f9' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center" sx={{ color: '#fff', margin: '2rem 0' }}>
                        {title}
                    </Typography>
                    {description && (
                        <Typography variant="body2" color="text.secondary" align="center">
                            {description}
                        </Typography>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MeetingLinkCard;