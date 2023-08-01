import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Menu from '@/components/Showcases/Menu';
import Header from '@/components/InnerPages/ProjectDetails2/Header';
import About from '@/components/InnerPages/ProjectDetails2/About';
import Content from '@/components/InnerPages/ProjectDetails2/Content';
import CallToAction from '@/components/InnerPages/ProjectDetails2/CallToAction';
import DarkNavbar from '../dark-navbar';
import Footer from '@/components/HomeMain/Footer';



function ProjectDetails2() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Project Details</title>
      </Head>

      <Loader />
      <DarkNavbar />
      <Menu />
      <main className="main-bg">
        <Header />
        <About />
        <Content />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

ProjectDetails2.getLayout = page => <Layout>{page}</Layout>

export default ProjectDetails2;