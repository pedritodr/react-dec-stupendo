import React from "react";
import "../styles/decSections.css";

import { Footer } from "../components/Footers/Footer";
import { SectionsHeader } from "./dec-sections/SectionsHeader";
import { SectionCarousel } from "./dec-sections/SectionCarousel";
import { SectionFooter } from "./dec-sections/SectionFooter";

export const Dec = () => {
  return (
    <>
      <SectionsHeader />
      <SectionCarousel />
      <SectionFooter />
      <Footer />
    </>
  );
};
