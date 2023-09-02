import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
// import Header from "@/components/Architecture/Header";
import Loader from "@/components/Common/Loader";
import Portfolio from "@/components/Freelancer/Portfolio";
import HzScroll from "@/components/CreativeAgency/HorizontalScroll";
import About from "@/components/HomeMain/About";
import Clients from "@/components/HomeMain/Clients";
import Footer from "@/components/HomeMain/Footer";
import Marq from "@/components/HomeMain/Marq";
import Services from "@/components/HomeMain/Services";
import ServicesTabs from "@/components/HomeMain/ServicesTabs";
import Testimonials from "@/components/HomeMain/Testimonials";
import DarkNavbar from "../dark-navbar";
import PortfolioClassicGrid2 from "../portfolio-grid-2";
import PortfolioClassicGrid3 from "../portfolio-grid-3";
import Blog from "@/components/HomeMain/Blog";

import CreativeBlog from "@/components/CreativeAgency/Blog";
import WeAre from "@/components/InnerPages/Weare/WeAre";
import Wellness from "@/components/InnerPages/Home/Wellness";
import Header from "@/components/HomeMain/Header";

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

            <Portfolio />
            <PortfolioClassicGrid2 />
            <PortfolioClassicGrid3 />
            <Marq />
            <Clients />
            <Services />
            <ServicesTabs />
            <Testimonials />
            <HzScroll />
            <CreativeBlog />
            {/* <WeAre /> */}
            <Wellness />
            <Blog />
            <About />

          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

HomeCreativeAgency.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeCreativeAgency;
