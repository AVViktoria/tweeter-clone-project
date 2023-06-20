import type { AppProps } from "next/app";

// notification
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

//        Layouts
import Layout from "../components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
//       Styles
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Toaster/>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      {/* <Modal actionLabel="Submit"  isOpen title="Test Modal"/> */}
    </>
   
    
  );
}
export default App;
