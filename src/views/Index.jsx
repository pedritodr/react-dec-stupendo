import React from 'react';
import '../styles/indexSections.css';

import { SectionsDigital } from './index-sections/SectionsDigital';
import { SectionsHeader } from './index-sections/SectionsHeader';
import { SectionFirmaRapida } from './index-sections/SectionFirmaRapida';
import { SectionRapida } from './index-sections/SectionRapida';
import { SectionPortafolio } from './index-sections/SectionPortafolio';
import { Footer } from '../components/Footers/Footer';

export const Index = () => {
  return (
    <>
      <SectionsHeader />
      <SectionsDigital />
      <SectionFirmaRapida />
      <SectionRapida />
      <SectionPortafolio />
      <Footer />
    </>
  );
};
