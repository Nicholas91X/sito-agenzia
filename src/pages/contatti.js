import ContattiContainer from '@/containers/ContattiContainer';
import Head from 'next/head';
import React from 'react';

export default function Contatti() {
    return (
        <>
            <Head>
                <title>Contatti - Sito Agenzia</title>
                <meta name="description" content="Sito vetrina per la mia agenzia web" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ContattiContainer />
        </>
    );
}