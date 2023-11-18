import React, { useEffect } from "react"; // Import useEffect from React
import Loader from "@/components/Common/Loader";
import Head from "next/head";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";
import DefaultLayout from "@/layouts/default";
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
            {/* <CheckoutForm /> */}
            
          </main>
          <DarkFooter />
        </div>
      </div>
    </>
  );
}

PurchaseDetails.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default PurchaseDetails;
