import ServiziContainer from '@/containers/ServiziContainer';
import Head from 'next/head';
import React from 'react';

export default function Servizi() {
    return (
        <>
            <Head>
                <title>Servizi - Sito Wide Studio Digitale</title>
                <meta name="description" content="Sito vetrina" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ServiziContainer />
        </>
    );
}