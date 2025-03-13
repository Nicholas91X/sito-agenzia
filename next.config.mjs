/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Applica la regola a tutte le richieste per i file nella cartella /assets/videos/
                source: '/assets/videos/:all*',
                headers: [
                    {
                        key: 'Cache-Control',
                        // Imposta un max-age di 1 anno e segnala che il contenuto è immutabile
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;