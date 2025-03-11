import { useEffect } from 'react';

/**
 * Hook personalizzato per far partire/fermare i video in base alla visibilità
 * (IntersectionObserver). 
 * @param {Array<React.RefObject<HTMLVideoElement>>} videoRefs - array di useRef 
 * @param {number} threshold - soglia di visibilità per l'osservazione
 */
export default function useAutoplayVideos(videoRefs, threshold = 0.2) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const videoEl = entry.target;
                    if (entry.isIntersecting) {
                        videoEl.play();
                    } else {
                        videoEl.pause();
                    }
                });
            },
            { threshold }
        );

        // Attacca observer a ogni ref
        videoRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            // Cleanup
            videoRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [videoRefs, threshold]);
}