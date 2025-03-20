import { NextSeo } from 'next-seo';

export default function SEO({ title, description, canonical }) {
    return (
        <NextSeo
            title={title}
            description={description}
            canonical={canonical}
            openGraph={{
                url: canonical,
                title: title,
                description: description,
                images: [
                    {
                        url: `${canonical}/og-image.jpg`,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ],
                site_name: 'Wide Studio Digitale',
            }}
        />
    );
}