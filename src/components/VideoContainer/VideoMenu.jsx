import React from 'react';
import { List } from '@mui/material';
import { VideoMenuBox, StyledListItem, StyledListItemText, StyledVideoMenuIcon } from './VideoContainer.styles';
import { useMediaQuery } from '@mui/material';

export default function VideoMenu({ videoList, selectedVideo, onSelect }) {
    // Verifica se siamo in modalità mobile (< 767px)
    const isMobile = useMediaQuery('(max-width:767px)');

    return (
        <VideoMenuBox>
            <List>
                {videoList.map((video, index) => (
                    <StyledListItem key={index} button onClick={() => onSelect(video)}>
                        {isMobile ? (
                            // Renderizza l'icona personalizzata con gli effetti
                            <StyledVideoMenuIcon active={video.title === selectedVideo.title ? 1 : 0}>
                                {/* Crea l'elemento iconico dinamicamente */}
                                {React.createElement(video.icon, { fontSize: 'inherit' })}
                            </StyledVideoMenuIcon>
                        ) : (
                            // Renderizza il testo con effetto wave
                            <StyledListItemText primary={video.title} active={video.title === selectedVideo.title ? 1 : 0} />
                        )}
                    </StyledListItem>
                ))}
            </List>
        </VideoMenuBox>
    );
}