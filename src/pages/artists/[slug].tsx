import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import type { GetStaticProps } from 'next';

import Header from '@/components/Header';

export type Artist = {
  slug: string;
  name: string;
  picture: string;
  nickname: string;
  description: string;
};

export async function getStaticPaths() {
  return {
    paths: require('@/data/artists').art.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<
  { artist: Artist },
  { slug: string }
> = async (context) => {
  return {
    props: {
      artist: require('@/data/artists').art.find(
        (artist: Artist) => artist.slug === context.params.slug,
      ),
    },
  };
};

export function ArtistPage({ artist }: { artist: Artist }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`${artist.name} | Bluebird - Contemporary arts clique`}</title>
      </Head>
      <Header className="border-b border-gray" />
      <button
        type="button"
        className="mt-8 ml-8 text-2xl"
        onClick={router.back}
      >
        ←
      </button>
      <article className="mt-4 px-32 flex flex-col items-center">
        <h2 className="text-dark-gray">{artist.name}</h2>
        <h1 className="leading-8 text-4xl font-light">{artist.nickname}</h1>
        <img alt={artist.name} className="mt-6 w-84" src={artist.picture} />
        <p className="mt-8">{artist.description}</p>
      </article>
    </>
  );
}

export default ArtistPage;
