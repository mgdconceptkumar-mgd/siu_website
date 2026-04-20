"use client";
import React from "react";
import "../../styles/siu-redesign.css";
import HeaderSIU from "../../layout/headers/header-siu";
import Hero from "./hero";
import Ecosystem from "./ecosystem";
import Process from "./process";
import ForParents from "./for-parents";
import DownloadApp from "./download-app";
import Universities from "./universities";
import Testimonials from "./testimonials";
import FAQ from "./faq";
import Closing from "./closing";
import { Footer } from "../../layout";
import { LanguageProvider } from "../../contexts/LanguageContext";
import { VoiceAssistantProvider } from "./voice-assistant/VoiceAssistantProvider";
import VoiceAssistantWidget from "./voice-assistant/VoiceAssistantWidget";

const StudyInUAEMain = () => {
  return (
    <div className="siu-redesign">
      <HeaderSIU />
|      <VoiceAssistantProvider>
        <main>
          <Hero />
          <Ecosystem />
          <Process />
          <ForParents />
          <DownloadApp />
          <Universities />
          <Testimonials />
          <FAQ />
          <Closing />
        </main>
        <Footer />
        <VoiceAssistantWidget />
      </VoiceAssistantProvider>
      
      <style jsx global>{`
        body {
          background: #ffffff !important;
          color: #0f172a !important;
          margin: 0;
          padding: 0 !important;
          overflow-x: hidden;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Hide default navbar if necessary (since we use HeaderSIU) */
        .edu-header:not(.siu-redesign-header) {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default StudyInUAEMain;