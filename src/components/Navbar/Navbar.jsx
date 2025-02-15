import React, { useEffect, useState } from 'react';
import { Toolbar, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { StyledAppBar, StyledMenuButton, SocialIconButton, StyledHamburgerButton } from './Navbar.styles';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MobileMenuDrawer from './MobileMenuDrawer';
import { StyledLogoContainerNavbar, StyledLogoImage } from './MobileMenudrawer.styles';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    const [activeMenu, setActiveMenu] = useState("");

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Chi Siamo", path: "/chi-siamo" },
        { name: "Servizi", path: "/servizi" },
        { name: "Blog", path: "/blog" },
        { name: "Contatti", path: "/contatti" },
        { name: "Collaborazioni", path: "/collaborazioni" }
    ];

    // Imposta il menu attivo in base all'URL
    useEffect(() => {
        const currentItem = menuItems.find(item => item.path === router.pathname);
        if (currentItem) {
            setActiveMenu(currentItem.name);
        }
    }, [router.pathname]);

    return (
        <StyledAppBar position="fixed">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                {/* LOGO */}
                <StyledLogoContainerNavbar onClick={() => router.push("/")}>
                    <StyledLogoImage src="/assets/images/team.webp" alt="Logo" />
                </StyledLogoContainerNavbar>

                {/* MENU DESKTOP */}
                <Box sx={{ display: { xs: 'none', md: "flex" }, gap: { md: 0.1, lg: 2 } }}>
                    {menuItems.map((item) => (
                        <StyledMenuButton
                            key={item.name}
                            color="inherit"
                            active={activeMenu === item.name ? 1 : 0}
                            onClick={() => {
                                setActiveMenu(item.name);
                                router.push(item.path);
                            }}
                        >
                            {item.name}
                        </StyledMenuButton>
                    ))}
                </Box>

                {/* HAMBURGER MENU (Mobile) */}
                <StyledHamburgerButton onClick={() => setDrawerOpen(true)}>
                    <MenuIcon />
                </StyledHamburgerButton>

                {/* SOCIAL ICONS */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.1, sm: 0.5 } }}>
                    <SocialIconButton color="secondary"><YouTubeIcon /></SocialIconButton>
                    <SocialIconButton color="secondary"><LinkedInIcon /></SocialIconButton>
                    <SocialIconButton color="secondary"><InstagramIcon /></SocialIconButton>
                    <SocialIconButton color="secondary"><FacebookIcon /></SocialIconButton>
                    <SocialIconButton color="secondary"><EmailIcon /></SocialIconButton>
                    <SocialIconButton color="secondary"><PhoneIcon /></SocialIconButton>
                </Box>
            </Toolbar>

            {/* DRAWER (MENU MOBILE) */}
            <MobileMenuDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                menuItems={menuItems}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />
        </StyledAppBar>
    );
}