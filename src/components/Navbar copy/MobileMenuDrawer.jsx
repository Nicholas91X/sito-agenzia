import React from 'react';
import { useRouter } from 'next/router';
import { StyledBox, StyledButton, StyledDrawer, StyledLogoContainer, StyledLogoImage } from './MobileMenudrawer.styles';
import { Box } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { SocialIconButton } from './Navbar.styles';

export default function MobileMenuDrawer({ open, onClose, menuItems, activeMenu, setActiveMenu }) {
    const router = useRouter();

    return (
        <StyledDrawer anchor="left" open={open} onClose={onClose}>
            {/* Contenitore per il Logo */}
            <StyledLogoContainer onClick={() => router.push("/")}>
                <StyledLogoImage src="/assets/images/logo.png" alt="Logo" />
            </StyledLogoContainer>

            {/* Menu Items */}
            <StyledBox>
                {menuItems.map((item) => (
                    <StyledButton
                        key={item.name}
                        active={activeMenu === item.name ? 'true' : 'false'}
                        onClick={() => {
                            setActiveMenu(item.name);
                            router.push(item.path);
                            onClose();
                        }}
                    >
                        {item.name}
                    </StyledButton>
                ))}
            </StyledBox>

            {/* SOCIAL ICONS */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.1, sm: 0.5 } }}>
                <SocialIconButton color="secondary"><YouTubeIcon /></SocialIconButton>
                <SocialIconButton color="secondary"><LinkedInIcon /></SocialIconButton>
                <SocialIconButton color="secondary"><InstagramIcon /></SocialIconButton>
                <SocialIconButton color="secondary"><FacebookIcon /></SocialIconButton>
                <SocialIconButton color="secondary"><EmailIcon /></SocialIconButton>
                <SocialIconButton color="secondary"><PhoneIcon /></SocialIconButton>
            </Box>
        </StyledDrawer>
    );
}