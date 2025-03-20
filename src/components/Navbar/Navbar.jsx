import React, { useEffect, useMemo, useState } from 'react';
import { Toolbar, Box, useTheme, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { StyledAppBar, StyledMenuButton, StyledHamburgerButton } from './Navbar.styles';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenuDrawer from './MobileMenuDrawer';
import { StyledLogoContainerNavbar, StyledLogoImage } from './MobileMenudrawer.styles';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    const [activeMenu, setActiveMenu] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    const theme = useTheme();
    const isMdOrBelow = useMediaQuery(theme.breakpoints.down('md'));


    const menuItems = useMemo(() => [
        { name: "Home", path: "/" },
        { name: "Chi Siamo", path: "/chi-siamo" },
        { name: "Servizi", path: "/servizi" },
        { name: "Contatti", path: "/contatti" },
        { name: "Quiz", path: "/quiz" },
    ], []);

    useEffect(() => {
        const currentItem = menuItems.find(item => item.path === router.pathname);
        if (currentItem) {
            setActiveMenu(currentItem.name);
        }
    }, [router.pathname, menuItems]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.5) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const transitionVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
    };

    const currentPage = router.pathname === "/" ? "home" : router.pathname.replace("/", "");

    return (
        <StyledAppBar position="fixed">
            <Toolbar sx={{ position: 'relative', display: "flex", justifyContent: "flex-end", width: "100%", height: '10vh' }}>
                {/* LOGO */}
                <StyledLogoContainerNavbar onClick={() => router.push("/")}>
                    <StyledLogoImage src="/assets/images/logo.png" alt="Logo" />
                </StyledLogoContainerNavbar>

                {/* Contenitore assoluto per menu desktop / hamburger */}
                <Box sx={{ position: 'absolute', top: 0, right: '2rem', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <AnimatePresence mode="wait">
                        {(!isScrolled && !isMdOrBelow) ? (
                            <motion.div
                                key="desktop-menu"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.9 }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: { md: 0.1, lg: 2 } }}>
                                    {menuItems.map((item) => (
                                        <motion.div key={item.name}>
                                            <StyledMenuButton
                                                color="inherit"
                                                active={activeMenu === item.name ? 'true' : 'false'}
                                                page={currentPage}
                                                onClick={() => {
                                                    setActiveMenu(item.name);
                                                    router.push(item.path);
                                                }}
                                            >
                                                {item.name}
                                            </StyledMenuButton>
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="hamburger-menu"
                                initial={transitionVariants.initial}
                                animate={transitionVariants.animate}
                                exit={transitionVariants.exit}
                                transition={{ delay: 0.3, duration: 0.9 }}
                            >
                                <StyledHamburgerButton onClick={() => setDrawerOpen(true)} sx={{ display: 'flex' }}>
                                    <MenuIcon />
                                </StyledHamburgerButton>
                            </motion.div>
                        )}
                    </AnimatePresence>
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