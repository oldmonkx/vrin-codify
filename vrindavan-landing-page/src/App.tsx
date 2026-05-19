import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import Configurations from './components/Configurations';
import Highlights from './components/Highlights';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';
import Location from './components/Location';
import Specifications from './components/Specifications';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import LeadModal from './components/LeadModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Get Exclusive Access");
  const [isFloorPlansUnlocked, setIsFloorPlansUnlocked] = useState(false);

  const openModal = (title?: string) => {
    if (title) setModalTitle(title);
    setIsModalOpen(true);
  };

  const handleUnlockFloorPlans = () => {
    openModal("Unlock Floor Plans");
  };

  useEffect(() => {
    if (isModalOpen) {
      // Demo logic
    }
  }, [isModalOpen]);

  return (
    <div className="relative min-h-screen bg-brand-paper selection:bg-brand-magenta/20 selection:text-brand-ink overflow-x-hidden">
      <Header onBookVisit={() => openModal("Book a Site Visit")} />
      
      <main>
        <Hero onDownloadBrochure={() => openModal("Download Brochure")} />
        <Amenities />
        <Configurations onGetPrice={() => openModal("Get Price Sheet")} />
        <Highlights />
        <FloorPlans 
          isUnlocked={isFloorPlansUnlocked} 
          onUnlock={handleUnlockFloorPlans} 
        />
        <Location />
        <Specifications onDownload={() => openModal("Download Specifications")} />
      </main>

      <Footer onBookVisit={() => openModal("Book a Site Visit")} />
      <MobileBottomBar onBrochure={() => openModal("Download Brochure")} />

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          if (modalTitle === "Unlock Floor Plans") {
            setIsFloorPlansUnlocked(true);
          }
        }} 
        title={modalTitle}
      />
    </div>
  );
}
