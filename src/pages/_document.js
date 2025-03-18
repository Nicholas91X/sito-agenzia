import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="it">
                <Head>
                    {/* Preload Google Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

                    {/* Poppins per titoli */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Pacifico:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />

                    {/* Inter per il resto del testo */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
                        rel="stylesheet"
                    />
                    {/* Calendly CSS */}
                    <link
                        href="https://assets.calendly.com/assets/external/widget.css"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

// Spectral, Lobster, Cinzel+Decorative, Pacifico, Caveat, Dancing Script