import { useEffect } from "react";
import Head from "next/head";
import Layout from "@/layouts/default";
import Loader from "@/components/Common/Loader";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";
import CheckoutForm from "@/components/PaymentInfo/CheckoutForm";

function PurchaseDetails() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    // Additional setup if needed

    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "PURCHASE",
    title: "Details.",
  };

  return (
    <>
      <Head>
        <title>Createabit - Purchase Details</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <DarkNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <CheckoutForm />
          </main>
          <DarkFooter />
        </div>
      </div>
    </>
  );
}

PurchaseDetails.getLayout = (page) => <Layout>{page}</Layout>;

export default PurchaseDetails;
