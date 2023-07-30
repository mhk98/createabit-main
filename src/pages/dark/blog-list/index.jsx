import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Header from "@/components/InnerPages/Blog/Header";
import List from "@/components/InnerPages/Blog/List";
import DarkNavbar from "../dark-navbar";
import Footer from "@/components/HomeMain/Footer";

function BlogList() {
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
        <title>Geekfolio - Blog List</title>
      </Head>

      <Loader />
      <DarkNavbar></DarkNavbar>
      <main className="main-bg">
        <Header data={metadata} />
        <List />
      </main>
      <Footer />
    </>
  );
}

BlogList.getLayout = (page) => <Layout>{page}</Layout>;

export default BlogList;
