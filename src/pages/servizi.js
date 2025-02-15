import Head from 'next/head';
import React from 'react';
import ServiziContainer from '../components/Servizi/ServiziContainer';

export default function Servizi() {
    return (
        <>
            <Head>
                <title>Servizi - Sito Agenzia</title>
                <meta name="description" content="Sito vetrina per la mia agenzia web" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ServiziContainer />
        </>
    );
}