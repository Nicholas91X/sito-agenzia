import ChiSiamoContainer from '@/containers/ChiSiamoContainer';
import Head from 'next/head';
import React from 'react';

export default function ChiSiamo() {
    return (
        <>
            <Head>
                <title>Chi Siamo - Wide Studio Digitale</title>
                <meta name="description" content="Sito vetrina" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ChiSiamoContainer />
        </>
    );
}