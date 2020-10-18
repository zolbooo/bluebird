import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

const Art = styled.div`
  background-image: url(${require('@/assets/art.png?resize&size=640')});
  @media (min-width: 640px) {
    background-image: url(${require('@/assets/art.png?resize&size=320')});
  }
  @media (min-width: 768px) {
    background-image: url(${require('@/assets/art.png?resize&size=384')});
  }
  @media (min-width: 1024px) {
    background-image: url(${require('@/assets/art.png?resize&size=512')});
  }
`;
const SoundArt = styled.div`
  background-image: url(${require('@/assets/sound-art.png?resize&size=640')});
  @media (min-width: 640px) {
    background-image: url(${require('@/assets/sound-art.png?resize&size=320')});
  }
  @media (min-width: 768px) {
    background-image: url(${require('@/assets/sound-art.png?resize&size=384')});
  }
  @media (min-width: 1024px) {
    background-image: url(${require('@/assets/sound-art.png?resize&size=512')});
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
      <section className="w-screen px-24 py-16 flex flex-row justify-between uppercase tracking-wide text-4xl text-white text-center font-light">
        <Link href="/art">
          <a className="w-5/12 h-96">
            <Art className="w-full h-full bg-cover flex justify-center items-center">
              <span>Art</span>
            </Art>
          </a>
        </Link>
        <Link href="/sound-art">
          <a className="w-5/12 h-96">
            <SoundArt className="w-full h-full bg-cover flex justify-center items-center">
              <span>
                Sound
                <br />
                art
              </span>
            </SoundArt>
          </a>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Home;
