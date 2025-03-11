import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TimelineStep = ({ step }) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded((prev) => !prev);

    return (
        <motion.div
            onClick={toggleExpanded}
            whileHover={{ scale: 1.01 }}
            style={{ cursor: 'pointer' }}
        >
            <Box sx={{ position: 'relative', mb: 4 }}>
                {/* Punto della timeline animato */}
                <Box
                    style={{
                        position: 'absolute',
                        left: '-0.6rem',
                        top: '0.5rem',
                        width: '1.5rem',
                        height: '1.5rem',
                        borderRadius: '50%',
                        backgroundColor: '#323738'
                    }}
                />
                <Box sx={{ pl: '3rem' }}>
                    {/* Header: icona e titolo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pb: 1 }}>
                        {step.icon}
                        <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
                            {step.title}
                        </Typography>
                    </Box>
                    {/* Sommario */}
                    <Typography variant="body2" sx={{ marginBottom: '1rem' }}>{step.summary}</Typography>
                    {/* Dettagli espandibili */}
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 1.5 }}
                            >
                                <Typography variant="body3" sx={{ mt: 2 }}>
                                    {step.details}
                                </Typography>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {/* Icona per attirare l'attenzione se non espanso */}
                    <AnimatePresence>
                        {!expanded && (
                            <motion.div
                                key="hint"
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 5 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                            >
                                <KeyboardArrowDownIcon sx={{ fontSize: {sm: '1rem', md: '2rem'}, color: 'secondary.other', mt: 1 }} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Box>
            </Box>
        </motion.div>
    );
};

export default TimelineStep;