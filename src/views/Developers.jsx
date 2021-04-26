import React from 'react';
import  '../../src/styles/developers.css';
import { Footer } from '../components/Footers/Footer';
import { SectionDevBoxs } from './developers-sections/SectionDevBoxs';
import { SectionDevCreate } from './developers-sections/SectionDevCreate';
import { SectionDevFooter } from './developers-sections/SectionDevFooter';
import { SectionDevHeader } from './developers-sections/SectionDevHeader';

export const Developers = () => {
  return (
    <>
      <SectionDevHeader />
      <SectionDevBoxs />
       <SectionDevCreate />
      <SectionDevFooter />
      <Footer />
    </>
  );
};
