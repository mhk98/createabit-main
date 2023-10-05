import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout

//= Components
import Loader from "@/components/Common/Loader";
import Header from "@/components/InnerPages/Header";
import Layout from "@/layouts/default";

import Service1 from "@/components/InnerPages/ServiceDetails/Service1";
import LightNavbar from "../light-navbar";
import LightFooter from "../light-footer";

function PageService1() {
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
      <LightNavbar></LightNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Service1></Service1>
      </main>
      <LightFooter />
    </>
  );
}

PageService1.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageService1;
