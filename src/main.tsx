import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import enTranslation from '../src/locales/en/translation.json';
import arTranslation from '../src/locales/ar/translation.json';

const resources = {
  en: {
    global: enTranslation,
  },
  ar: {
    global: arTranslation,
  },
};

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: [
        'cookie',
        'localStorage',
        'sessionStorage',
        'htmlTag',
        'querystring',
        'navigator',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '../src/locale/{{lng}}/Translation.json',
    },
  });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
