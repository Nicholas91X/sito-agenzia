import React, { useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { StyledBox, VideoWrapper } from './ContattiContainer.styles';
import VideoPlayer from '../VideoContainer/VideoPlayer';
import VideoOverlay from './Videooverlay';
import "leaflet/dist/leaflet.css";

export default function ContattiContainer() {

    const videoRef = useRef(null);
    const [playCount, setPlayCount] = useState(1);

    const handleVideoEnded = () => {
        if (playCount < 100 && videoRef.current) {
            setPlayCount(prev => prev + 1);
            videoRef.current.play();
        }
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
        }
    };

    return (
        <StyledBox>
            <Navbar />
            <VideoWrapper>
                <VideoPlayer src={'/assets/videos/mockup_2.mp4'} onEnded={handleVideoEnded} videoRef={videoRef} />
                <VideoOverlay title={"Contatti"} animationTrigger={0} onClick={togglePlayPause} />
            </VideoWrapper>
        </StyledBox>
    );
};