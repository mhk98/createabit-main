import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import GridFourCols from "@/components/Portfolio/ClassicGrid/4Col";
import Header from "@/components/Portfolio/Header";
import Footer from "@/components/Startup/Footer";

function PortfolioClassicGrid3() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "Classic Grid 4.",
  };

  return (
    <>
      <Head>
        <title>Createabit - Portfolio Classic Grid 4 Col</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main>
        <Header data={metadata} />
        <GridFourCols />
      </main>
      <Footer subBg lightMode />
    </>
  );
}

PortfolioClassicGrid3.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PortfolioClassicGrid3;
