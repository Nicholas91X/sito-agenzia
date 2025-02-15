import React, { useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { StyledBox, VideoWrapper } from './ServiziContainer.styles';
import VideoPlayer from '../VideoContainer/VideoPlayer';
import VideoOverlay from './VideoOverlay';

export default function ServiziContainer() {

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
                <VideoPlayer src={'/assets/videos/mockup_1.mp4'} onEnded={handleVideoEnded} videoRef={videoRef} />
                <VideoOverlay title={"Servizi"} animationTrigger={0} onClick={togglePlayPause} />
            </VideoWrapper>
        </StyledBox>
    );
};