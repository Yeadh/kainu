import React from "react";
import Layout from "../../components/common/Layout";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";
import Gallerys from "../../components/Gallerys";
import Footer from "../../components/Footer";
import ManagementOrganization from "../../components/team/ManagementOrganization";
import GalleryProfileWrapper from "../../components/GalleryProfileWrapper";

const team = () => {
  return (
    <>
      <Layout>
        <div className=""></div>
        <Hero />
        <GalleryProfileWrapper />

        <ManagementOrganization />
      </Layout>
      <Footer />
    </>
  );
};

export default team;
