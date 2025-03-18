import React from 'react';
import {
    HoverPreviewContainer,
    PreviewBox,
    PreviewText,
    PreviewImage,
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
                    <PreviewImage
                        src={previewRefs.current[index]}
                        alt={label}
                    />
                )}
            </PreviewBox>
        </HoverPreviewContainer>
    );
}