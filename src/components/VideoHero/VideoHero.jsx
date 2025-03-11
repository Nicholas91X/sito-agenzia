import React from 'react';
import {
    VideoContainer,
    StyledVideo,
    StyledH1,
} from './VideoHero.style';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';

/**
 * Componente "hero" riusabile.
 * @param {object} props
 * @param {React.RefObject<HTMLVideoElement>} props.videoRef - ref del video
 * @param {string} props.videoSrc - path del video mp4
 * @param {string} props.titleText - titolo da mostrare sull'overlay
 * @param {function} props.onScrollDown - callback eseguita al click sull'indicatore
 * @param {React.ReactNode} props.children - eventuale contenuto extra nell'overlay
 */
export default function VideoHero({
    videoRef,
    videoSrc,
    titleText,
    onScrollDown,
    children,
}) {
    return (
        <VideoContainer>
            <StyledVideo ref={videoRef} autoPlay muted loop playsInline preload="auto">
                <source src={videoSrc} type="video/mp4" />
                Il tuo browser non supporta i video.
            </StyledVideo>
            <StyledH1 variant="h1">{titleText}</StyledH1>

            {/* ScrollIndicator in basso */}
            {onScrollDown && <ScrollIndicator onClick={onScrollDown} />}

            {/* Eventuali altri children */}
            {children}
        </VideoContainer>
    );
}
