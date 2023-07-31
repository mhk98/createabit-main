import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Header from '@/components/InnerPages/Blog/Header';
import List from '@/components/InnerPages/Blog/List';
import LightNavbar from '../light-navbar';
import Footer from '@/components/HomeMain/Footer';



function BlogListLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "OUR BLOG",
    title: "Latest News."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Blog List</title>
      </Head>

      <Loader />
      <LightNavbar />
      <main className="main-bg">
        <Header data={metadata} />
        <List />
      </main>
      <Footer lightMode />
    </>
  )
}

BlogListLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default BlogListLight;