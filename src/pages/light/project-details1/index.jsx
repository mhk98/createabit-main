import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import LightFooter from "@/components/HomeMain/LightFooter";
import CallToAction from "@/components/InnerPages/ProjectDetails/CallToAction";
import Content from "@/components/InnerPages/ProjectDetails/Content";
import Header from "@/components/InnerPages/ProjectDetails/Header";
import LightNavbar from "../light-navbar";

function ProjectDetailsLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Project Details</title>
      </Head>

      <Loader />
      <LightNavbar />
      <main>
        <Header />
        <Content />
        <CallToAction />
      </main>
      <LightFooter lightMode />
    </>
  );
}

ProjectDetailsLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default ProjectDetailsLight;
