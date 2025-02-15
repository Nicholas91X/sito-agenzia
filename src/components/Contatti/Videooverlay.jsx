import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Overlay } from './ContattiContainer.styles';
import ContattiGrid from './ContattiGrid';

export default function VideoOverlay({ title, onClick }) {
    return (
        <Overlay onClick={onClick}>
            <motion.div
                key={0}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                style={{ position: 'absolute', top: '7%', width: '100%' }}
            >
                <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold', fontSize: { xs: '1.9rem', sm: '2rem', md: '3rem' } }}>
                    <em>{title}</em>
                </Typography>
            </motion.div>
            {/* Griglia dei contatti */}
            <ContattiGrid />
        </Overlay>
    );
}