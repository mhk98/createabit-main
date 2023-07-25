import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";

import ProductShop1 from "@/components/InnerPages/Shop/productShop1";
import Footer from "@/components/Startup/Footer";
import DarkNavbar from "../dark-navbar";
import ProductShop3 from "@/components/InnerPages/Shop/productShop3";

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
        <ProductShop3></ProductShop3>
      </main>
      <Footer />
    </>
  );
}

PageProductShop1.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageProductShop1;
