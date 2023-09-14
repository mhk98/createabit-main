import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import LightFooter from "@/components/HomeMain/LightFooter";
import Form from "@/components/InnerPages/Contact/Form";
import Header from "@/components/InnerPages/Contact/Header";
import LightNavbar from "../light-navbar";

function PageContactLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Contact Us</title>
      </Head>

      <Loader />
      <LightNavbar></LightNavbar>
      <main>
        <Header />
        <Form />
      </main>
      <LightFooter lightMode />
    </>
  );
}

PageContactLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageContactLight;
