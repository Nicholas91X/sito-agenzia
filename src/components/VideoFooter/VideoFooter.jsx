import React from 'react';
import {
    BoxVideoFooter,
    FooterVideo,
    FooterOverlay,
    FooterContent,
} from './VideoFooter.style';

import SocialIcons from '../SocialIcons/SocialIcons';
import { Typography } from '@mui/material';

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
                <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', margin: '1.25rem 0 0.8rem 0' }}>
                    Alessia Amoruso - WIDE
                </Typography>
                <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                    P.IVA IT12346683989384898
                </Typography>
                <SocialIcons />
            </FooterContent>
        </BoxVideoFooter>
    );
}