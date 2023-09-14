import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";

import Footer from "@/components/HomeMain/Footer";
import Header from "@/components/InnerPages/Team/Header";
import Team from "@/components/Startup/Team";
import DarkNavbar from "../dark-navbar";

function PageTeam() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Createabit - Our Team</title>
      </Head>

      <Loader />
      <DarkNavbar />
      <main>
        <Header />
        <Team />
        {/* <Testimonials /> */}
        {/* <CallToAction innerPageStyle /> */}
      </main>
      <Footer />
    </>
  );
}

PageTeam.getLayout = (page) => <Layout>{page}</Layout>;

export default PageTeam;
