import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enLocales from "./en";
import frLocales from "./fr";
import i18n from "i18next";

let lng = "";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enLocales },
      fr: { translations: frLocales },
    },
    detection: {
      order: [
        "path",
        "subdomain",
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      lookupFromPathIndex: 1,
    },
    lng,
    fallbackLng: lng,
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
