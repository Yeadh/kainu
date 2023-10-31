import Footer from "../components/Footer";
import Layout from "../components/common/Layout";
import { useEffect } from "react";
import { HomeBanner } from "../components/landing/HomeBanner";
import { JoinGame } from "../components/landing/JoinGame";
import styles from "../styles/landing/index.module.css";
import { ListHome } from "../components/landing/ListHome";
import { Branding } from "../components/tournament-overview/Branding";
import { Team } from "../components/landing/Team";
import { LandingContact } from "../components/landing/LandingContact";
import { Merchandise } from "../components/landing/Merchandise";
import { Blog } from "../components/landing/Blog";
import { Controller } from "react-scrollmagic";
export default function Home() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <Controller>
      <div className={`${styles.landingwrapper} `}>
        <Layout nosidebar nopadding>
          <HomeBanner />
          <JoinGame />
          <div className={`${styles.listhome}  mx-auto`}>
            <ListHome />
            <Blog />
            <Team />
            <Merchandise />
            <LandingContact />
            <Branding />
          </div>
        </Layout>
        <Footer />
      </div>
    </Controller>
  );
}
