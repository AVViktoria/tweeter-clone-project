import type { AppProps } from 'next/app'
// import { Toaster } from 'react-hot-toast';
// import { SessionProvider } from 'next-auth/react';

import Layout from '../components/Layout';
import '../styles/globals.css';


 function App({ Component, pageProps }: AppProps) {
  return (
    // <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </SessionProvider>
      
  )
 }
export default App;