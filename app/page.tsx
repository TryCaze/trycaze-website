"use client";
import React from "react";
import { NavbarDemo } from "./components/ui/nav";
import Hero from "./components/components/hero";
import { FloatingDockDemo } from "./components/ui/footer";
import About from "./components/components/about";
import Technology from "./components/components/technology";
import Pricing from "./components/components/pricing";
import Importance  from "./components/components/importance";
import Services from "./components/components/services";
import Process from "./components/components/process";

export default function Home() {
  return (
    <>
    <NavbarDemo />
    <Hero />
    <Importance />
    <About />
    <Services />
    <Process />
    <Technology />
    <Pricing />
    <FloatingDockDemo />
    </>
  );
}
