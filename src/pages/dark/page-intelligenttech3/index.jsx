import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import Services from "@/components/InnerPages/About/Services";
import Portfolio from "@/components/InnerPages/Services/Portfolio";
import ServicesTab from "@/components/DigitalAgency/ServicesTab";
import FAQ from "@/components/InnerPages/Services/FAQ";
import CallToAction from "@/components/Startup/CallToAction";
import Footer from "@/components/Startup/Footer";
import DarkNavbar from "../dark-navbar";
import ProductShop2 from "@/components/InnerPages/Shop/productShop2";
import IntelligentTech3 from "@/components/InnerPages/Intelligent/IntelligentTech3";
// import ProductShop1 from "@/components/InnerPages/Shop/productShop1";

function PageProductShop1() {
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
        <IntelligentTech3></IntelligentTech3>
      </main>
      <Footer />
    </>
  );
}

PageProductShop1.getLayout = (page) => <Layout>{page}</Layout>;

export default PageProductShop1;
