import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";

import LightFooter from "@/components/HomeMain/LightFooter";
import WhoWeAre from "@/components/InnerPages/WhoWeAre/WhoWeAre";
import LightNavbar from "../light-navbar";
// import ProductShop1 from "@/components/InnerPages/Shop/productShop1";

function About() {
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
        <WhoWeAre />
      </main>
      <LightFooter lightMode />
    </>
  );
}

About.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default About;
