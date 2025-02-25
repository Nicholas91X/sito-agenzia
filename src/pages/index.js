import Head from 'next/head';
import HomeContainer from '../components/VideoContainer/HomeContainer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home - Sito Agenzia</title>
                <meta name="description" content="Sito vetrina per la mia agenzia web" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <HomeContainer />
        </>
    );
}