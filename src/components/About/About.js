import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const AboutSection = () => {
    return (
        <Box
            sx={{
                py: 8,
                px: { xs: 2, md: 4 },
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
            }}
        >
            {/* Titolo della sezione */}
            <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
            >
                Chi Siamo
            </Typography>

            {/* Descrizione introduttiva */}
            <Typography
                variant="subtitle1"
                color="text.secondary"
                paragraph
                sx={{ maxWidth: 600, mx: 'auto' }}
            >
                Siamo un team di professionisti appassionati di web design, sviluppo e
                marketing digitale. La nostra missione è aiutare le aziende a crescere e
                a farsi notare online con soluzioni innovative e personalizzate.
            </Typography>

            {/* Contenuto a due colonne: testo ed immagine */}
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph>
                        Con anni di esperienza nel settore, il nostro team è formato da esperti
                        designer, sviluppatori e specialisti del marketing digitale. Ogni progetto
                        viene seguito con cura e dedizione, per garantire risultati eccellenti e
                        soluzioni che superino le aspettative.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Crediamo nell'importanza di un approccio personalizzato: ascoltiamo le
                        esigenze dei nostri clienti e creiamo strategie su misura per far emergere
                        la loro unicità.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box
                        component="img"
                        src="/assets/images/team.webp"
                        alt="Il nostro team"
                        sx={{
                            width: '100%',
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutSection;