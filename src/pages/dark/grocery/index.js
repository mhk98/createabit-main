import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import Grocery from "@/components/InnerPages/Grocery/Grocery";
import DarkNavbar from "../dark-navbar";
import DarkFooter from "../dark-footer";

function GroceryProduct() {
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
        <title>Createabit - Grocery</title>
      </Head>

      <Loader />
      <DarkNavbar></DarkNavbar>
      <main>
        <Grocery />
      </main>
      <DarkFooter />
    </>
  );
}

GroceryProduct.getLayout = (page) => <Layout>{page}</Layout>;

export default GroceryProduct;
