import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";
import PaymentStatus from "@/payment/PaymentStatus";

function PaymentResult() {
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
        <PaymentStatus />
      </main>
      <DarkFooter />
    </>
  );
}

PaymentResult.getLayout = (page) => <Layout>{page}</Layout>;

export default PaymentResult;
