import QuizContainer from '@/containers/QuizContainer';
import Head from 'next/head';
import React from 'react';

export default function Quiz() {
    return (
        <>
            <Head>
                <title>Quiz - Sito Wide Studio Digitale</title>
                <meta name="description" content="Sito vetrina" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <QuizContainer />
        </>
    );
}