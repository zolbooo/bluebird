import Head from 'next/head';
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ArtPage() {
  return (
    <>
      <Head>
        <title>Sound art | Bluebird - Contemporary arts clique</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header className="border-b border-gray" />
        <Footer className="mt-auto" />
      </div>
    </>
  );
}

export default ArtPage;
