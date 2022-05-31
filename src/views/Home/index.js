import React from "react";

import Hero from "../../components/layout/Hero";
import Footer from "../../components/layout/Footer";
import Projects from "../../components/layout/Projects";
import Skills from "../../components/layout/Skills";
import Divider from "@mui/material/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Divider flexItem sx={{ m: 1 }} />
      <Skills />
      <Footer />
    </>
  );
}
