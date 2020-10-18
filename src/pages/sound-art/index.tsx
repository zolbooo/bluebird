import Head from 'next/head';
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArtistList from '@/components/ArtistList';

import { Artist } from '@/pages/artists/[slug]';

export async function getStaticProps() {
  return { props: { artists: require('@/data/artists').soundArt } };
}

function ArtPage({ artists }: { artists: Artist[] }) {
  return (
    <>
      <Head>
        <title>Sound art | Bluebird - Contemporary arts clique</title>
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
