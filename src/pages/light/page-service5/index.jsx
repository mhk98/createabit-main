import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout

//= Components
import Loader from "@/components/Common/Loader";
import Header from "@/components/InnerPages/Header";
import Layout from "@/layouts/default";

import LightFooter from "@/components/HomeMain/LightFooter";

import Service2 from "@/components/InnerPages/ServiceDetails/Service2";
import LightNavbar from "../light-navbar";
import Service5 from "@/components/InnerPages/ServiceDetails/Service5";

function PageService5() {
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
        <Header data={headerMetadata} subBg={true} />
        <Service5></Service5>
      </main>
      <LightFooter />
    </>
  );
}

PageService5.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageService5;
