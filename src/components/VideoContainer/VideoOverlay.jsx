import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Overlay, BookingButton } from './VideoContainer.styles';

export default function VideoOverlay({ title, animationTrigger, onClick }) {
    return (
        <Overlay onClick={onClick}>
            <motion.div
                key={animationTrigger}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                style={{ position: 'absolute', top: '10%', width: '100%' }}
            >
                <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }}>
                    <em>{title}</em>
                </Typography>
            </motion.div>
            <BookingButton href="http://localhost:3000/contatti" onClick={(e) => e.stopPropagation()}>
                ⚡ Contattaci ⚡
            </BookingButton>
        </Overlay>
    );
}