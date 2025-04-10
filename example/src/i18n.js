import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {TransWithInspect, enableGlobalI18nInspection} from 'i18n-key-visualizer-react';

import en from './locales/en.json';

const customi18n = enableGlobalI18nInspection(i18n);

customi18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    // es: { translation: es },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default customi18n;