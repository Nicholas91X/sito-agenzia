import Head from 'next/head';
import React from 'react';
import ChiSiamoContainer from '../components/ChiSiamo/ChiSiamoContainer';

export default function ChiSiamo() {
    return (
        <>
            <Head>
                <title>Chi Siamo - Sito Agenzia</title>
                <meta name="description" content="Sito vetrina per la mia agenzia web" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ChiSiamoContainer />
        </>
    );
}