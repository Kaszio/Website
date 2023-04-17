

import Head from 'next/head'
import '../styles/globals.css'
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';
import { SSRProvider } from 'react-bootstrap';
import { BreakpointProvider } from 'react-socks';


function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
}, []);

const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
   
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <React.Fragment>
       <SSRProvider>
      <Layout>
      <BreakpointProvider>
        <Component {...pageProps} />
        </BreakpointProvider>
      </Layout>  
      </SSRProvider>
    </React.Fragment>
    </>
  );
}

export default MyApp;
