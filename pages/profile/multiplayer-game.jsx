import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";
import Layout from "../../components/common/Layout";
import { useEffect } from "react";

import MutiplayerGameWrapper from "../../components/multiplayerGame/MutiplayerGameWrapper";
import Recently from "../../components/multiplayerGame/Recently";

export default function MultiplayerGame() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      <Layout>
        <Hero />
        <Profile />
        <Recently />
        <MutiplayerGameWrapper />
        <MutiplayerGameWrapper />
      </Layout>
      <Footer />
    </>
  );
}
