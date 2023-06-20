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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      {/* <EditModal /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}