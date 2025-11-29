import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';

const savedLocale = localStorage.getItem('user_locale');

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: savedLocale || import.meta.env.VITE_DEFAULT_LOCALE || 'en', // Default locale from env or fallback to 'en'
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
});

export default i18n;
