import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Header from "@/components/InnerPages/Contact/Header";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";
import Payment from "@/payment/Payment";

function PagePayment() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Contact Us</title>
      </Head>

      <Loader />
      <DarkNavbar></DarkNavbar>
      <main>
       
        <Payment />
      </main>
      <DarkFooter />
    </>
  );
}

PagePayment.getLayout = (page) => <Layout>{page}</Layout>;

export default PagePayment;
