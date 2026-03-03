import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';

const savedLocale = localStorage.getItem('user_locale');
const defaultLocale = savedLocale || import.meta.env.VITE_DEFAULT_LOCALE || 'en';

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: { en, fr },
});

/**
 * Switch locale at runtime and persist the preference.
 */
export function setLocale(locale) {
  i18n.global.locale.value = locale;
  localStorage.setItem('user_locale', locale);
}

export default i18n;
