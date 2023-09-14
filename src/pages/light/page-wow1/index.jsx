import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";

import LightFooter from "@/components/HomeMain/LightFooter";
import Wow1 from "@/components/InnerPages/Wow/Wow1";
import LightNavbar from "../light-navbar";

// import ProductShop1 from "@/components/InnerPages/Shop/productShop1";

function PageWow1() {
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
      <LightNavbar />
      <main>
        <Wow1></Wow1>
      </main>
      <LightFooter lightMode />
    </>
  );
}

PageWow1.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageWow1;
