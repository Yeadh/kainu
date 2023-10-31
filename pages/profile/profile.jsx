import Footer from "../../components/Footer";
import Gallerys from "../../components/Gallerys";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";
import Layout from "../../components/common/Layout";
import ThreeDots from "../../components/common/ThreeDots";
import { useEffect } from "react";
import ManagementOrganization from "../../components/team/ManagementOrganization";
import ProfileDetails from "../../components/profile/ProfileDetails";

export default function ProfilePage() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      <Layout>
        <div className=""></div>
        <Hero />
        <Profile />
        <ProfileDetails />
      </Layout>
      <Footer />
    </>
  );
}
