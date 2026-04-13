"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

const LanguageContext = createContext();

const translations = { en, ar };

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  // Load saved language or default to 'en'
  useEffect(() => {
    const savedLang = localStorage.getItem("siu-language");
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("siu-language", lang);
    // Apply RTL/LTR to HTML tag
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => {
    const keys = path.split(".");
    let result = translations[lang];
    
    for (const key of keys) {
      if (result[key] === undefined) {
        // Fallback to English if key missing in Arabic
        let fallback = translations["en"];
        for (const fKey of keys) {
          fallback = fallback ? fallback[fKey] : undefined;
        }
        return fallback || path;
      }
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
