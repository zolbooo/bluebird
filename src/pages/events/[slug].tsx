import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import type { GetStaticProps } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import type { Event } from '@/pages/events';

export async function getStaticPaths() {
  const events = require('@/data/events');
  return {
    paths: events.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<
  { event: Event },
  { slug: string }
> = async (context) => {
  const events: Event[] = require('@/data/events');
  return {
    props: {
      event: events.find((event) => event.slug === context.params.slug),
    },
  };
};

export function EventPage({ event }: { event: Event }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`${event.name} | Bluebird - Contemporary arts clique`}</title>
      </Head>
      <div className="min-h-screen flex flex-col items-start">
        <Header className="border-b border-gray" />
        <button
          type="button"
          className="mt-8 ml-8 text-2xl"
          onClick={router.back}
        >
          ←
        </button>
        <article className="mt-4 mb-12 w-full px-32 flex flex-col items-center">
          <h2 className="text-xl font-semibold">{event.name}</h2>
          <img alt={event.name} className="mt-6 w-1/2" src={event.picture} />
          <p className="mt-8 w-full text-left">
            {event.description ?? 'No information at the moment'}
          </p>
        </article>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}

export default EventPage;
