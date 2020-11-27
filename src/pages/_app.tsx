import '@/global.css';

import React from 'react';

// eslint-disable-next-line react/prop-types
function ReactApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default ReactApp;
