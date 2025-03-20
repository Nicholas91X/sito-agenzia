import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export function ServiceCard({ title, summary, details, icon }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '8px' }}
        >
            <Card elevation={hovered ? 8 : 2} sx={{ transition: 'box-shadow 0.3s ease' }}>
                <CardContent>
                    {/* Header della card con icona e titolo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        {icon}
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                    </Box>
                    {/* Sommario visibile sempre */}
                    <Typography variant="body1">{summary}</Typography>

                    {/* Contenuto espandibile */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={hovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                {details}
                            </Typography>
                        </Box>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
}