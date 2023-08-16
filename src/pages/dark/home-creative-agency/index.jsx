import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Portfolio from "@/components/Freelancer/Portfolio";
import HzScroll from "@/components/CreativeAgency/HorizontalScroll";
import DarkNavbar from "../dark-navbar";
import About from "@/components/HomeMain/About";
import PortfolioClassicGrid2 from "../portfolio-grid-2";
import PortfolioClassicGrid3 from "../portfolio-grid-3";
import Marq from "@/components/HomeMain/Marq";
import Services from "@/components/HomeMain/Services";
import Clients from "@/components/HomeMain/Clients";
import ServicesTabs from "@/components/HomeMain/ServicesTabs";
import Footer from "@/components/HomeMain/Footer";
import Testimonials from "@/components/HomeMain/Testimonials";
import Header from "@/components/Architecture/Header";

function HomeCreativeAgency() {
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
        <DarkNavbar mainBg noStatic />
        <div id="smooth-content">
          <main className="main-bg">
            <Header />
            <About />
            <Portfolio />
            <PortfolioClassicGrid2 />
            <PortfolioClassicGrid3 />
            <Marq />
            <Clients />
            <Services />
            <ServicesTabs />
            <Testimonials />
            <HzScroll />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

HomeCreativeAgency.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeCreativeAgency;
