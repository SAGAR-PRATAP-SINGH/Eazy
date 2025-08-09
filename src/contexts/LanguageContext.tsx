import React, { createContext, useContext, useMemo, useState } from "react";

export type Language = "en" | "hi";

type Dict = Record<string, string>;

const en: Dict = {
  appName: "Eazy",
  heroTitle: "Find trusted local workers",
  heroSubtitle: "Connect with nearby electricians, plumbers, labourers and more—fast and reliable.",
  findWorker: "Find Worker",
  becomeWorker: "Become a Worker",
  login: "Login",
  register: "Register",
  categories: "Service Categories",
  workers: "Workers",
  bookNow: "Book Now",
  book: "Book",
  orderSummary: "Order Summary",
  date: "Date",
  time: "Time",
  location: "Location",
  confirmBooking: "Confirm Booking",
  language: "Language",
  theme: "Theme",
  search: "Search",
  rating: "Rating",
  skills: "Skills",
  roleUser: "User",
  roleWorker: "Worker",
  email: "Email",
  password: "Password",
  name: "Name",
  phone: "Phone",
  viewWorkers: "View Workers",
  welcomeCtaFind: "Find local pros",
  welcomeCtaBecome: "Start earning",
};

const hi: Dict = {
  appName: "ईज़ी",
  heroTitle: "विश्वसनीय स्थानीय कामगार खोजें",
  heroSubtitle: "बिजली मिस्त्री, प्लम्बर, मजदूर और अधिक—तेज़ और भरोसेमंद तरीके से जुड़ें।",
  findWorker: "कामगार खोजें",
  becomeWorker: "कामगार बनें",
  login: "लॉगिन",
  register: "रजिस्टर",
  categories: "सेवा श्रेणियाँ",
  workers: "कामगार",
  bookNow: "बुक करें",
  book: "बुक",
  orderSummary: "आर्डर सारांश",
  date: "तारीख",
  time: "समय",
  location: "स्थान",
  confirmBooking: "बुकिंग कन्फर्म करें",
  language: "भाषा",
  theme: "थीम",
  search: "खोजें",
  rating: "रेटिंग",
  skills: "कौशल",
  roleUser: "यूज़र",
  roleWorker: "कामगार",
  email: "ईमेल",
  password: "पासवर्ड",
  name: "नाम",
  phone: "फ़ोन",
  viewWorkers: "कामगार देखें",
  welcomeCtaFind: "स्थानीय प्रो खोजें",
  welcomeCtaBecome: "कमाई शुरू करें",
};

const dictionaries: Record<Language, Dict> = { en, hi };

interface I18nContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("en");

  const value = useMemo(() => {
    const dict = dictionaries[lang] || en;
    const t = (key: string) => dict[key] ?? key;
    return { lang, setLang, t };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
};
