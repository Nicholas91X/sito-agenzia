import React from 'react';
import {
    SocialIconButton,
} from './SocialIcons.style';

// Icone Material UI
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box } from '@mui/material';

/**
 * Componente riusabile con icone social
 */
export default function SocialIcons() {
    return (
        <>
            {/* SOCIAL ICONS */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0.75rem 0', width: '100%', gap: { xs: 0.1, sm: 0.5 } }}>
                <a href="https://www.linkedin.com/company/widestudiodigitale/" target="_blank" rel="noopener noreferrer">
                    <SocialIconButton color="secondary"><LinkedInIcon /></SocialIconButton>
                </a>
                <a href="https://www.instagram.com/wide_studiodigitale?igsh=MXR5dWZ6bnk1Y3VidA==" target="_blank" rel="noopener noreferrer">
                    <SocialIconButton color="secondary"><InstagramIcon /></SocialIconButton>
                </a>
                <a href="https://www.facebook.com/share/1AHQBPjrD8/" target="_blank" rel="noopener noreferrer">
                    <SocialIconButton color="secondary"><FacebookIcon /></SocialIconButton>
                </a>
                <a href="mailto:widestudiodigitale@gmail.com" target="_blank" rel="noopener noreferrer">
                    <SocialIconButton color="secondary"><EmailIcon /></SocialIconButton>
                </a>
                <a href="tel:+3271562265" target="_blank" rel="noopener noreferrer">
                    <SocialIconButton color="secondary"><PhoneIcon /></SocialIconButton>
                </a>
            </Box>
        </>
    );
}