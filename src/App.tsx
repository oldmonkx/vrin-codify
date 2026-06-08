import React, { useState, useEffect, Suspense } from 'react';
import { contentDraft } from './content';
import Header from './components/Header';
import Hero from './components/Hero';
import DisclaimerModal from './components/DisclaimerModal';
const ProjectHighlights = React.lazy(() => import('./components/ProjectHighlights'));
const Configurations = React.lazy(() => import('./components/Configurations'));
const Highlights = React.lazy(() => import('./components/Highlights'));
const Amenities = React.lazy(() => import('./components/Amenities'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const ConstructionUpdates = React.lazy(() => import('./components/ConstructionUpdates'));
const Location = React.lazy(() => import('./components/Location'));
const Specifications = React.lazy(() => import('./components/Specifications'));
const Footer = React.lazy(() => import('./components/Footer'));
const MobileBottomBar = React.lazy(() => import('./components/MobileBottomBar'));
const LeadModal = React.lazy(() => import('./components/LeadModal'));

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
    <div className="relative min-h-screen bg-brand-paper selection:bg-brand-secondary-accent/20 selection:text-brand-ink overflow-x-hidden">
      <DisclaimerModal />
      <Header onBookVisit={() => openModal(interactionContent.modalTitles.bookSiteVisit)} />
      
      <main>
        <Hero onDownloadBrochure={() => openModal(interactionContent.modalTitles.downloadBrochure)} />
        <Suspense fallback={null}>
          <ProjectHighlights />
          <Configurations onGetPrice={() => openModal(interactionContent.modalTitles.getPriceSheet)} />
          <Amenities onDownloadBrochure={() => openModal(interactionContent.modalTitles.downloadBrochure)} />
          <Highlights />
          <Gallery />
          <Location />
          <ConstructionUpdates />
          <Specifications onDownload={() => openModal(interactionContent.modalTitles.downloadSpecifications)} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer onBookVisit={() => openModal(interactionContent.modalTitles.bookSiteVisit)} />
        <MobileBottomBar onBrochure={() => openModal(interactionContent.modalTitles.downloadBrochure)} />
        <LeadModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title={modalTitle}
        />
      </Suspense>
    </div>
  );
}
