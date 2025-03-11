import React from 'react';
import {
    BoxVideoFooter,
    FooterVideo,
    FooterOverlay,
    FooterContent,
} from './VideoFooter.style';

import SocialIcons from '../SocialIcons/SocialIcons';

/**
 * Footer con video di sfondo + overlay + social icons
 * @param {object} props
 * @param {React.RefObject<HTMLVideoElement>} props.videoRef - ref del video
 * @param {string} props.videoSrc - path del video mp4
 */
export default function VideoFooter({ videoRef, videoSrc }) {
    return (
        <BoxVideoFooter>
            <FooterVideo ref={videoRef} autoPlay muted loop playsInline preload="auto">
                <source src={videoSrc} type="video/mp4" />
                Il tuo browser non supporta i video.
            </FooterVideo>

            <FooterOverlay />

            <FooterContent>
                <SocialIcons />
            </FooterContent>
        </BoxVideoFooter>
    );
}