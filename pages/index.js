import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

import Header from "../components/Navigation";
import HeroImage from "../components/HeroImage";
import ParallaxImage from "../components/ParallaxImage";

import FloorPlans from "../components/FloorPlans";
import Features from "../components/Features";
import Neighborhood from "../components/Neighborhood";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";

import Gallery from "../components/Gallery";

import kitchenRendering from "../public/assets/images/Kitchen_05_B.webp";
import bathRendering from "../public/assets/images/Bathroom_05.webp";
import parkFountain from "../public/assets/images/AdobeStock_103052731.webp";
// import heroRendering from "../public/assets/images/1471_Prev_06.webp";
import heroRenderingExtraGray from "../public/assets/images/1471_Prev_06-edit.jpg";
import Mural from "../components/Mural";

export default function Home() {
  return (
    <>
      <Header />
      <HeroImage />
      <About />
      <FloorPlans />
      <ParallaxImage image={kitchenRendering.src} height="100vh" />
      <Features />
      <ParallaxImage image={bathRendering.src} height="100vh" />
      <Gallery />
      <Neighborhood />
      <ParallaxImage image={parkFountain.src} height="100vh" />
      <Mural />
      <ParallaxImage image={heroRenderingExtraGray.src} height="100vh" />
      <Contact />
      <Footer />
    </>
  );
}
