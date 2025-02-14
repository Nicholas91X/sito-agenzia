import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Typography,
    Button
} from '@mui/material';

import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState("Home");
    const menuItems = [
        "Home",
        "Chi Siamo",
        "Servizi",
        "Blog",
        "Prezzi",
        "Contatti",
        "Collaborazioni"
    ];

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "black",
                height: "10vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
                    LOGO
                </Typography>

                {/* Navigazione */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                    {menuItems.map((item) => (
                        <Button
                            key={item}
                            color="inherit"
                            onClick={() => setActiveMenu(item)}
                            sx={{
                                position: 'relative',
                                transition: 'transform 0.3s ease, color 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    color: 'primary.main'
                                },
                                // Stile per l'item attivo
                                ...(activeMenu === item && {
                                    color: 'primary.main',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        backgroundColor: 'primary.main'
                                    }
                                })
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>

                {/* Icone social */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                        color="inherit"
                        sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.2)', color: 'primary.main' }
                        }}
                    >
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.2)', color: 'primary.main' }
                        }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.2)', color: 'primary.main' }
                        }}
                    >
                        <InstagramIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.2)', color: 'primary.main' }
                        }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.2)', color: 'primary.main' }
                        }}
                    >
                        <EmailIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.2)', color: 'primary.main' }
                        }}
                    >
                        <PhoneIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}