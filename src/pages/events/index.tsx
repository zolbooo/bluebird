import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export type Event = {
  slug: string;
  name: string;
  link: string;
  start: string;
  picture: string;
};

export async function getStaticProps() {
  return { props: { events: require('@/data/events') } };
}

function EventsPage({ events }: { events: Event[] }) {
  return (
    <>
      <Head>
        <title>Events | Bluebird - Contemporary arts clique</title>
      </Head>
      <div className="min-h-screen flex flex-col flex-wrap">
        <Header className="border-b border-gray" />
        <div className="mt-8 px-16 w-full">
          {events.map((event) => (
            <Link href="/events/[slug]" as={`/events/${event.slug}`}>
              <a>
                <div className="w-5/12">
                  <img
                    className="mt-2 w-full"
                    alt={event.name}
                    src={event.picture}
                  />
                  <h3 className="block text-center text-lg font-semibold">
                    {event.name}
                  </h3>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
}

export default EventsPage;
