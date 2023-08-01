import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Header from "@/components/InnerPages/Header";
import Portfolio from "@/components/InnerPages/Services/Portfolio";
import ServicesTab from "@/components/DigitalAgency/ServicesTab";
import CallToAction from "@/components/Startup/CallToAction";
import DarkNavbar from "../dark-navbar";
import Footer from "@/components/HomeMain/Footer";

function PageServices() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "SERVICES",
  };

  return (
    <>
      <Head>
        <title>Geekfolio - Services</title>
      </Head>

      <Loader />
      <DarkNavbar></DarkNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        {/* <Services /> */}
        <Portfolio />
        <ServicesTab />
        {/* <FAQ /> */}
        <CallToAction innerPageStyle />
      </main>
      <Footer />
    </>
  );
}

PageServices.getLayout = (page) => <Layout>{page}</Layout>;

export default PageServices;
