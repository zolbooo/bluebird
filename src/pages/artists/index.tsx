import Head from 'next/head';
import React from 'react';

import Header from '@/components/Header';
import ArtistList from '@/components/ArtistList';

import { Artist } from '@/pages/artists/[slug]';

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
      <Header className="border-b border-gray" />
      <ArtistList className="mt-8 mx-32" data={artists} />
    </>
  );
}

export default ArtPage;
