import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import LightFooter from "@/components/HomeMain/LightFooter";
import About from "@/components/InnerPages/ProjectDetails2/About";
import CallToAction from "@/components/InnerPages/ProjectDetails2/CallToAction";
import Content from "@/components/InnerPages/ProjectDetails2/Content";
import Header from "@/components/InnerPages/ProjectDetails2/Header";
import Menu from "@/components/Showcases/Menu";
import Navigation from "@/components/Showcases/Navigation";

function ProjectDetails2Light() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Project Details</title>
      </Head>

      <Loader />
      <Navigation lightMode darkOnScroll />
      <Menu lightMode />
      <main className="main-bg">
        <Header />
        <About />
        <Content />
        <CallToAction />
      </main>
      <LightFooter lightMode />
    </>
  );
}

ProjectDetails2Light.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default ProjectDetails2Light;
