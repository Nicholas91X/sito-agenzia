import React from 'react';
import {
    HoverPreviewContainer,
    PreviewBox,
    PreviewVideo,
    PreviewText,
} from './HoverPreview.style';

export default function HoverPreviewItem({
    label,
    videoSrc,
    onMouseEnter,
    onMouseLeave,
    index,
    previewRefs,
}) {
    return (
        <HoverPreviewContainer
            onMouseEnter={() => onMouseEnter(videoSrc, index)}
            onMouseLeave={() => onMouseLeave(index)}
        >
            <PreviewText>{label}</PreviewText>
            <PreviewBox className="preview">
                {previewRefs.current[index] && (
                    <PreviewVideo autoPlay muted loop playsInline preload="none">
                        <source src={previewRefs.current[index]} type="video/mp4" />
                    </PreviewVideo>
                )}
            </PreviewBox>
        </HoverPreviewContainer>
    );
}