import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function HomeContainer() {
    const videoList = [
        { title: "Digital Transformation", src: "/assets/videos/mockup.mp4" },
        { title: "Social Media Management", src: "/assets/videos/mockup_1.mp4" },
        { title: "Web Development", src: "/assets/videos/mockup_2.mp4" },
        { title: "Automation & Integration", src: "/assets/videos/mockup_3.mp4" },
    ];

    const [selectedVideo, setSelectedVideo] = useState(videoList[0]);
    const [animationTrigger, setAnimationTrigger] = useState(0);
    const videoRef = useRef(null);
    const [playCount, setPlayCount] = useState(1);

    // Quando cambia il video, resettiamo il contatore e riproduciamo il nuovo video
    useEffect(() => {
        setPlayCount(1);
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [selectedVideo]);

    // Se il video termina, lo riproduciamo (fino a un massimo di 3 riproduzioni)
    const handleVideoEnded = () => {
        if (playCount < 3 && videoRef.current) {
            setPlayCount(prev => prev + 1);
            videoRef.current.play();
        }
    };

    // Funzione per mettere in pausa/riavviare il video (click sull'overlay)
    const togglePlayPause = () => {
        if (videoRef.current) {
            videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
        }
    };

    // Gestione del click sui pallini: cambia video e riavvia l'animazione del testo
    const handleVideoSelection = (video) => {
        setSelectedVideo(video);
        setAnimationTrigger(prev => prev + 1);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <Navbar />

            <Box
                sx={{
                    position: "relative",
                    width: "100vw",
                    height: "90vh",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <video
                    key={selectedVideo.src}
                    autoPlay
                    muted
                    playsInline
                    ref={videoRef}
                    onEnded={handleVideoEnded}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                    <source src={selectedVideo.src} type="video/mp4" />
                    Il tuo browser non supporta il tag video.
                </video>

                <Box
                    onClick={togglePlayPause}
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        px: 2,
                        cursor: "pointer",
                    }}
                >
                    <motion.div
                        key={animationTrigger}
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        style={{ position: "absolute", top: "15%", width: "100%" }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: { xs: "2rem", md: "3rem" },
                            }}
                        >
                            <em>{selectedVideo.title}</em>
                        </Typography>
                    </motion.div>

                    <Button
                        variant="contained"
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                            color: "#fff",
                            backgroundColor: "blue",
                            fontWeight: "bold",
                            fontSize: { xs: "1rem", md: "1.5rem" },
                            mt: 4,
                            position: "absolute",
                            bottom: "5%",
                            padding: "10px 50px",
                            borderRadius: "50px",
                        }}
                    >
                        ⚡ Prenota ora ⚡
                    </Button>
                </Box>

                <Box sx={{ position: "absolute", right: "2vw", top: "50%", transform: "translateY(-50%)" }}>
                    <List>
                        {videoList.map((video, index) => (
                            <ListItem
                                key={index}
                                button
                                onClick={() => handleVideoSelection(video)}
                                sx={{
                                    cursor: 'pointer', borderTopLeftRadius: "50px",
                                    borderBottomLeftRadius: "50px",
                                }}
                            >
                                <ListItemText
                                    primary={video.title}
                                    sx={{
                                        position: 'relative',
                                        padding: "5px 20px",
                                        textAlign: "center",
                                        fontWeight: video.title === selectedVideo.title ? "bold" : "normal",
                                        color: "white",
                                        ...(video.title !== selectedVideo.title && {
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(90deg, transparent 30%, #FF5733 50%, transparent 70%)',
                                                backgroundSize: '300%',
                                                animation: 'wave 5s linear infinite',
                                                opacity: 0.7,
                                                pointerEvents: 'none',
                                                mixBlendMode: 'overlay',
                                                borderTopLeftRadius: "50px",
                                                borderBottomLeftRadius: "50px",
                                            },
                                        }),
                                        ...(video.title === selectedVideo.title && {
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                border: '1px solid #FF5733',
                                                borderTopLeftRadius: "50px",
                                                borderBottomLeftRadius: "50px",
                                            },
                                        }),
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
}