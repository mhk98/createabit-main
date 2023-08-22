import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Header from '@/components/InnerPages/Contact/Header';
import Form from '@/components/InnerPages/Contact/Form';
import LightNavbar from '../light-navbar';
import Footer from '@/components/HomeMain/Footer';
import LightFooter from '@/components/HomeMain/LightFooter';


function PageContactLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Contact Us</title>
      </Head>

      <Loader />
      <LightNavbar></LightNavbar>
      <main>
        <Header />
        <Form />
      </main>
      <LightFooter lightMode />
    </>
  )
}

PageContactLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default PageContactLight;