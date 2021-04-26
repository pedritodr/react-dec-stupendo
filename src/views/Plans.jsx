import React from 'react';
import '../../src/styles/plans.css';
import { Footer } from '../components/Footers/Footer';
import { SectionPlansHeader } from './plans-sections/SectionPlansHeader';
import { SectionPlansBody } from './plans-sections/SectionPlansBody';

export const Plans = () => {
  return (
    <>
      <SectionPlansHeader />
     <SectionPlansBody/>
      <Footer />
    </>
  );
};
