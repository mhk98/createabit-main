import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import ProductShop1 from "@/components/InnerPages/Shop/productShop1";
import DarkNavbar from "../dark-navbar";

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
        <title>Createabit - Services</title>
      </Head>

      <Loader />
      <DarkNavbar></DarkNavbar>
      <main>
        <ProductShop1></ProductShop1>
      </main>
      <Footer />
    </>
  );
}

PageProductShop1.getLayout = (page) => <Layout>{page}</Layout>;

export default PageProductShop1;
