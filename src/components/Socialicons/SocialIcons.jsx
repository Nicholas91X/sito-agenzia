import React from 'react';
import {
    SocialIconsContainer,
    SocialIconButton,
} from './SocialIcons.style';

// Icone Material UI
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

/**
 * Componente riusabile con icone social
 */
export default function SocialIcons() {
    return (
        <SocialIconsContainer>
            <SocialIconButton color="secondary"><YouTubeIcon /></SocialIconButton>
            <SocialIconButton color="secondary"><LinkedInIcon /></SocialIconButton>
            <SocialIconButton color="secondary"><InstagramIcon /></SocialIconButton>
            <SocialIconButton color="secondary"><FacebookIcon /></SocialIconButton>
            <SocialIconButton color="secondary"><EmailIcon /></SocialIconButton>
            <SocialIconButton color="secondary"><PhoneIcon /></SocialIconButton>
        </SocialIconsContainer>
    );
}