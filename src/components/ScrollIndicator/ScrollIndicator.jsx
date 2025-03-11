import React from 'react';
import { ScrollIndicatorContainer, CircleArrow } from './ScrollIndicator.style';

/**
 * Indicatore di scroll (pallino con freccia)
 */
export default function ScrollIndicator({ onClick }) {
    return (
        <ScrollIndicatorContainer onClick={onClick}>
            <CircleArrow />
            Scroll
        </ScrollIndicatorContainer>
    );
}