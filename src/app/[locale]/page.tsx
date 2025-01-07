"use client";
import React from "react";
import Hero from "../components/components/hero";
import Importance from "../components/components/importance";
import About from "../components/components/about";
import Services from "../components/components/services";
import Technology from "../components/components/technology";
import Pricing from "../components/components/pricing";
import { FloatingDockDemo } from "../components/ui/footer";
import { Navbar } from "../components/ui/nav";
import Contact from "../components/components/contact";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Importance />
    <About />
    <Services />
    <Technology />
    <Pricing />
    <Contact />
    <FloatingDockDemo />
    </>
  );
}
