import type { AppProps } from "next/app";
// import { Toaster } from 'react-hot-toast';
// import { SessionProvider } from 'next-auth/react';

import Layout from "../components/Layout";
// import Modal from "../components/Modal";
import LoginModal from "@/components/modals/LoginModal";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    // <SessionProvider session={pageProps.session}>
    // </SessionProvider>  {/* <Modal actionLabel="Submit"  isOpen title="Test Modal"/> */}
  );
}
export default App;
