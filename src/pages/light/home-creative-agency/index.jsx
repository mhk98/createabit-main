import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Portfolio from "@/components/Freelancer/Portfolio";
import HzScroll from "@/components/CreativeAgency/HorizontalScroll";
import About from "@/components/HomeMain/About";
import PortfolioClassicGrid2Light from "../portfolio-grid-2";
import PortfolioClassicGrid3 from "../portfolio-grid-3";
import Marq from "@/components/HomeMain/Marq";
import Services from "@/components/HomeMain/Services";
import Clients from "@/components/HomeMain/Clients";
import ServicesTabs from "@/components/HomeMain/ServicesTabs";
import Footer from "@/components/HomeMain/Footer";
import Testimonials from "@/components/HomeMain/Testimonials";
import LightNavbar from "../light-navbar";
import Header from "@/components/HomeMain/Header";

function HomeCreativeAgencyLight() {
  useEffect(() => {
    document.body.classList.add("sub-bg");
    return () => document.body.classList.remove("sub-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Creative Agency</title>
      </Head>

      <Loader />

      <div id="smooth-wrapper">
        <LightNavbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Header lightMode />
            <About />
            <Portfolio />
            <PortfolioClassicGrid2Light />
            <PortfolioClassicGrid3 />
            <Marq />
            <Clients lightMode />
            <Services lightMode />
            {/* <Works /> */}
            <ServicesTabs lightMode />
            <Testimonials lightMode />
            <HzScroll lightMode />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

HomeCreativeAgencyLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default HomeCreativeAgencyLight;
