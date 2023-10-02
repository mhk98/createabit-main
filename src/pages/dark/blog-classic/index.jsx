import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";

import Classic from "@/components/InnerPages/Blog/Classic";
import Header from "@/components/InnerPages/Blog/Header";
import Footer from "@/components/Startup/Footer";
import DarkNavbar from "../dark-navbar";

function BlogClassic() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "OUR BLOG",
    title: "Latest News.",
  };

  return (
    <>
      <Head>
        <title>Createabit - Blog Classic</title>
      </Head>

      <Loader />
      <DarkNavbar mainBg />
      <main className="main-bg">
        <Header data={metadata} />
        <Classic />
      </main>
      <Footer />
    </>
  );
}

BlogClassic.getLayout = (page) => <Layout>{page}</Layout>;

export default BlogClassic;
