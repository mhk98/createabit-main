import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Footer from "@/components/HomeMain/Footer";
import IntelligentTech4 from "@/components/InnerPages/Intelligent/IntelligentTech4";
import Wow4 from "@/components/InnerPages/Wow/Wow4";

function PageWow4() {
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
      <Wow4></Wow4>
      <main>
        <IntelligentTech4></IntelligentTech4>
      </main>
      <Footer />
    </>
  );
}

PageWow4.getLayout = (page) => <Layout>{page}</Layout>;

export default PageWow4;
