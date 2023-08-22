import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import LightNavbar from "../light-navbar";
import IntelligentTech2 from "@/components/InnerPages/Intelligent/IntelligentTech2";
import Footer from "@/components/HomeMain/Footer";
import LightFooter from "@/components/HomeMain/LightFooter";
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
      <LightNavbar></LightNavbar>
      <main>
        <IntelligentTech2></IntelligentTech2>
      </main>
      <LightFooter lightMode/>
    </>
  );
}

PageProductShop1.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageProductShop1;
