import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import koCommon from "./locales/ko/common.json";
import frCommon from "./locales/fr/common.json";
import esCommon from "./locales/es/common.json";
import ptCommon from "./locales/pt/common.json";

const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
      },

      ko: {
        common: koCommon,
      },

      fr: {
        common: frCommon,
      },

      es: {
        common: esCommon,
      },

      pt: {
        common: ptCommon,
      },
    },

    lng: savedLanguage,

    fallbackLng: "en",

    defaultNS: "common",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;