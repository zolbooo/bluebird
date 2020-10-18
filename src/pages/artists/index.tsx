import Head from 'next/head';
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArtistList from '@/components/ArtistList';

import type { Artist } from '@/components/ArtistList';

export async function getStaticProps() {
  const artists = require('@/data/artists');
  return { props: { artists: [...artists.art, ...artists.soundArt] } };
}

function ArtPage({ artists }: { artists: Artist[] }) {
  return (
    <>
      <Head>
        <title>Artists | Bluebird - Contemporary arts clique</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header className="border-b border-gray" />
        <ArtistList className="mt-8 mx-32" data={artists} />
        <Footer className="mt-auto" />
      </div>
    </>
  );
}

export default ArtPage;
