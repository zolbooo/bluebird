import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import { Paragraph, Fragment, Button, Image, Text, View } from 'reflit';

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
  return Fragment(
    <Head>
      <title>{`${event.name} | Bluebird - Contemporary arts clique`}</title>
    </Head>,
    View(
      { className: 'min-h-screen flex flex-col items-start' },
      Header({ className: 'border-b border-gray-300' }),
      View(
        { className: 'mt-8 ml-4 flex flex-row items-center' },
        Button(
          { type: 'button', className: 'text-2xl', onClick: router.back },
          '←',
        ),
        Text({ className: 'text-xl ml-4 font-semibold' }, event.name),
      ),
      View(
        {
          className:
            'mt-4 mb-12 w-full px-8 md:px-32 flex flex-col items-center',
        },
        Image({
          alt: event.name,
          className: 'mt-6 w-full md:w-2/3',
          src: event.picture,
        }),
        Paragraph(
          { className: 'mt-8 w-full text-left' },
          event.description ?? 'No information at the moment',
        ),
      ),
      Footer({ className: 'mt-auto' }),
    ),
  );
}

export default EventPage;
