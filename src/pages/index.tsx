import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import Header from '@/components/Header';

const IntroSection = styled.section`
  background-image: url(${require('@/assets/bg-home.png?resize&size=1280')});
  @media (min-width: 640px) {
    background-image: url(${require('@/assets/bg-home.png?resize&size=640')});
  }
  @media (min-width: 768px) {
    background-image: url(${require('@/assets/bg-home.png?resize&size=768')});
  }
  @media (min-width: 1024px) {
    background-image: url(${require('@/assets/bg-home.png?resize&size=1024')});
  }
`;

function Home() {
  return (
    <>
      <Head>
        <title>Bluebird - Contemporary arts clique</title>
      </Head>
      <IntroSection className="w-screen h-screen bg-cover flex flex-col justify-between text-white">
        <Header />
        <div className="ml-auto mr-32 flex flex-col uppercase text-5xl font-light">
          <h1 className="font-semibold">Blue bird</h1>
          <h2>Contemporary</h2>
          <h2>Arts clique</h2>
        </div>
        <div />
      </IntroSection>
    </>
  );
}

export default Home;
