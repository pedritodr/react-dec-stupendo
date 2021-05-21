import React from "react";
import "../styles/sign.css";

import { Footer } from "../components/Footers/Footer";
import { SectionHeaderSign } from "./sign-sections/SectionHeaderSign";
import { SectionSignInfo } from "./sign-sections/SectionSignInfo";
import { SectionSignRuc } from "./sign-sections/SectionSignRuc";
import { SectionSignFooter } from "./sign-sections/SectionSignFooter";

export const Sign = () => {

  return (
    <>
      <SectionHeaderSign />
      <SectionSignInfo />
      <SectionSignRuc />
      <SectionSignFooter />
      <Footer />
    </>
  );
};
