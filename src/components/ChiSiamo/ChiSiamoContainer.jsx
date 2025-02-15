import React, { useRef, useState } from 'react';
import { StyledBox, VideoWrapper } from './ChiSiamoContainer.styles';
import Navbar from '../Navbar/Navbar';
import VideoPlayer from '../VideoContainer/VideoPlayer';
import VideoOverlay from './VideoOverlay';

export default function ChiSiamoContainer() {

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
                <VideoPlayer src={'/assets/videos/mockup.mp4'} onEnded={handleVideoEnded} videoRef={videoRef} />
                <VideoOverlay title={"Chi Siamo"} animationTrigger={0} onClick={togglePlayPause} />
            </VideoWrapper>
        </StyledBox>
    );
};