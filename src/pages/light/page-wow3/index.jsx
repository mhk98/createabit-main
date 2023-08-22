import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import LightFooter from "@/components/HomeMain/LightFooter";
import Wow3 from "@/components/InnerPages/Wow/Wow3";
import LightNavbar from "../light-navbar";

function PageWow3() {
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
      <LightNavbar />
      <main>
        <Wow3></Wow3>
      </main>
      <LightFooter lightMode />
    </>
  );
}

PageWow3.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageWow3;
