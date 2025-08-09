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
  tagline: "Get help when you need it — Fast, Easy, Reliable",
  whyChoose: "Why choose Eazy?",
  benefitConvenienceTitle: "Convenience",
  benefitConvenienceText: "Book trusted help in minutes—no calls, no hassle.",
  benefitVerifiedTitle: "Verified workers",
  benefitVerifiedText: "Profiles with ratings and ID checks for peace of mind.",
  benefitTransparentTitle: "Transparent pricing",
  benefitTransparentText: "Clear rates upfront, no surprises.",
  benefitInstantTitle: "Instant booking",
  benefitInstantText: "Reserve a time that works for you instantly.",
  howItWorks: "How it works",
  step1Title: "Search service",
  step1Text: "Pick a category and view nearby pros.",
  step2Title: "Book worker",
  step2Text: "Choose a time and confirm your booking.",
  step3Title: "Get job done",
  step3Text: "Your pro arrives and completes the work.",
  about: "About Us",
  contact: "Contact",
  terms: "Terms & Conditions",
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
  tagline: "जब जरूरत हो, तब मदद — तेज़, आसान, भरोसेमंद",
  whyChoose: "क्यों चुनें ईज़ी?",
  benefitConvenienceTitle: "सुविधा",
  benefitConvenienceText: "कुछ ही मिनटों में भरोसेमंद मदद बुक करें—ना कॉल, ना झंझट।",
  benefitVerifiedTitle: "सत्यापित कामगार",
  benefitVerifiedText: "रेटिंग और पहचान सत्यापन के साथ भरोसा।",
  benefitTransparentTitle: "पारदर्शी कीमत",
  benefitTransparentText: "पहले से स्पष्ट रेट—कोई सरप्राइज़ नहीं।",
  benefitInstantTitle: "तुरंत बुकिंग",
  benefitInstantText: "अपने समय के अनुसार तुरंत बुक करें।",
  howItWorks: "यह कैसे काम करता है",
  step1Title: "सेवा खोजें",
  step1Text: "श्रेणी चुनें और पास के प्रो देखें।",
  step2Title: "कामगार बुक करें",
  step2Text: "समय चुनें और बुकिंग कन्फर्म करें।",
  step3Title: "काम पूरा करवाएं",
  step3Text: "प्रो आएगा और काम पूरा करेगा।",
  about: "हमारे बारे में",
  contact: "संपर्क",
  terms: "नियम एवं शर्तें",
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
