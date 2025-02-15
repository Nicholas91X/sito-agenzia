import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import VideoPlayer from './VideoPlayer';
import VideoOverlay from './VideoOverlay';
import VideoMenu from './VideoMenu';
import { StyledBox, VideoWrapper } from './VideoContainer.styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShareIcon from '@mui/icons-material/Share';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';

export default function HomeContainer() {
    const videoList = [
        { title: 'Digital Transformation', src: '/assets/videos/mockup.mp4', icon: TrendingUpIcon },
        { title: 'Social Media Management', src: '/assets/videos/mockup_1.mp4', icon: ShareIcon },
        { title: 'Web Development', src: '/assets/videos/mockup_2.mp4', icon: CodeIcon },
        { title: 'Automation & Integration', src: '/assets/videos/mockup_3.mp4', icon: BuildIcon },
    ];

    const [selectedVideo, setSelectedVideo] = useState(videoList[0]);
    const [animationTrigger, setAnimationTrigger] = useState(0);
    const videoRef = useRef(null);
    const [playCount, setPlayCount] = useState(1);

    // Riproduciamo il nuovo video al cambio
    useEffect(() => {
        setPlayCount(1);
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [selectedVideo]);

    const handleVideoEnded = () => {
        if (playCount < 3 && videoRef.current) {
            setPlayCount(prev => prev + 1);
            videoRef.current.play();
        }
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
        }
    };

    const handleVideoSelection = (video) => {
        setSelectedVideo(video);
        setAnimationTrigger(prev => prev + 1);
    };

    return (
        <StyledBox>
            <Navbar />
            <VideoWrapper>
                <VideoPlayer src={selectedVideo.src} onEnded={handleVideoEnded} videoRef={videoRef} />
                <VideoOverlay title={selectedVideo.title} animationTrigger={animationTrigger} onClick={togglePlayPause} />
                <VideoMenu videoList={videoList} selectedVideo={selectedVideo} onSelect={handleVideoSelection} />
            </VideoWrapper>
        </StyledBox>
    );
}