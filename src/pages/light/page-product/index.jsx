import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/Startup/Footer";
import DarkNavbar from "../dark-navbar";
import Header from "@/components/InnerPages/Header";
import Products from "@/components/InnerPages/Products/products";

function PageProducts() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "Dynamic Digital Products",
  };

  return (
    <>
      <Head>
        <title>Geekfolio - Services</title>
      </Head>

      <Loader />
      {/* <Navbar mainBg /> */}
      <DarkNavbar></DarkNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Products />
        {/* <Services />
        <ServicesTab /> */}
        {/* <FAQ /> */}
        {/* <CallToAction innerPageStyle /> */}
        <Footer />
      </main>
    </>
  );
}

PageProducts.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageProducts;
