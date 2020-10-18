import Head from 'next/head';
import React from 'react';

import Header from '@/components/Header';
import ArtistList from '@/components/ArtistList';

import type { Artist } from '@/components/ArtistList';

export async function getStaticProps() {
  return { props: { artists: require('@/data/artists').art } };
}

function ArtPage({ artists }: { artists: Artist[] }) {
  return (
    <>
      <Head>
        <title>Art | Bluebird - Contemporary arts clique</title>
      </Head>
      <Header className="border-b border-gray" />
      <ArtistList className="mx-32 my-8" data={artists} />
    </>
  );
}

export default ArtPage;
