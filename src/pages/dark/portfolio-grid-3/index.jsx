import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import GridThreeCols from "@/components/Portfolio/ClassicGrid/3Col";

function PortfolioClassicGrid3() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "Our Products",
    title: "Dynamic Digital Products .",
  };

  return (
    <>
      <Head>
        <title>Createabit - Portfolio Classic Grid 3 Col</title>
      </Head>

      <Loader />
      {/* <Navbar mainBg /> */}
      <main className="main-bg">
        {/* <Header data={metadata} /> */}
        <GridThreeCols />
      </main>
      {/* <DarkFooter/> */}
    </>
  );
}

PortfolioClassicGrid3.getLayout = (page) => <Layout>{page}</Layout>;

export default PortfolioClassicGrid3;
