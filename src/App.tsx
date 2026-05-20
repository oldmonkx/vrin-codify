import React, { useState, useEffect } from 'react';
import { contentDraft } from './content';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectHighlights from './components/ProjectHighlights';

import Configurations from './components/Configurations';
import Highlights from './components/Highlights';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import ConstructionUpdates from './components/ConstructionUpdates';
import Location from './components/Location';
import Specifications from './components/Specifications';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import LeadModal from './components/LeadModal';

export default function App() {
  const interactionContent = contentDraft.interactions;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(contentDraft.leadModal.defaultTitle);
  const openModal = (title?: string) => {
    if (title) setModalTitle(title);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      // Demo logic
    }
  }, [isModalOpen]);

  return (
    <div className="relative min-h-screen bg-brand-paper selection:bg-brand-magenta/20 selection:text-brand-ink overflow-x-hidden">
      <Header onBookVisit={() => openModal(interactionContent.modalTitles.bookSiteVisit)} />
      
      <main>
        <Hero onDownloadBrochure={() => openModal(interactionContent.modalTitles.downloadBrochure)} />
        <ProjectHighlights />
        <Configurations onGetPrice={() => openModal(interactionContent.modalTitles.getPriceSheet)} />
        <Amenities onDownloadBrochure={() => openModal(interactionContent.modalTitles.downloadBrochure)} />
        <Highlights />
        <Gallery />
        <Location />
        <ConstructionUpdates />
        <Specifications onDownload={() => openModal(interactionContent.modalTitles.downloadSpecifications)} />
      </main>

      <Footer onBookVisit={() => openModal(interactionContent.modalTitles.bookSiteVisit)} />
      <MobileBottomBar onBrochure={() => openModal(interactionContent.modalTitles.downloadBrochure)} />

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalTitle}
      />
    </div>
  );
}
