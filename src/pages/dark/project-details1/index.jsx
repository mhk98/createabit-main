import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Header from '@/components/InnerPages/ProjectDetails/Header';
import Content from '@/components/InnerPages/ProjectDetails/Content';
import CallToAction from '@/components/InnerPages/ProjectDetails/CallToAction';
import DarkNavbar from '../dark-navbar';
import Footer from '@/components/HomeMain/Footer';


function ProjectDetails() {
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
      <main>
        <Header />
        <Content />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

ProjectDetails.getLayout = page => <Layout>{page}</Layout>

export default ProjectDetails;