import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { Fragment, Image, Text, View } from 'reflit';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export type Event = {
  slug: string;
  name: string;
  link: string;
  start: string;
  picture: string;
  description?: string;
};

export async function getStaticProps() {
  return { props: { events: require('@/data/events') } };
}

function EventsPage({ events }: { events: Event[] }) {
  return Fragment(
    <Head>
      <title>Events | Bluebird - Contemporary arts clique</title>
    </Head>,
    View(
      { className: 'min-h-screen flex flex-col flex-wrap' },
      Header({ className: 'border-b border-gray-300' }),
      View(
        { className: 'mt-8 px-16 w-full' },
        events.map((event) => (
          <Link href={`/events/${event.slug}`}>
            <a>
              {View(
                { className: 'w-full md:w-5/12' },
                Image({
                  className: 'mt-2 w-full',
                  alt: event.name,
                  src: event.picture,
                }),
                Text(
                  { className: 'block text-center text-lg font-semibold' },
                  event.name,
                ),
              )}
            </a>
          </Link>
        )),
      ),
      Footer({ className: 'mt-auto' }),
    ),
  );
}

export default EventsPage;
