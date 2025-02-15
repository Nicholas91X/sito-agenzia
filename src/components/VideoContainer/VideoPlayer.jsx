import React from 'react';

export default function VideoPlayer({ src, onEnded, videoRef }) {
    return (
        <video
            key={src}
            autoPlay
            muted
            playsInline
            ref={videoRef}
            onEnded={onEnded}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
            <source src={src} type="video/mp4" />
            Il tuo browser non supporta il tag video.
        </video>
    );
}