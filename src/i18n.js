import { createI18n } from 'vue-i18n';
import en from './locales/en.json';

const savedLocale = localStorage.getItem('user_locale');
const defaultLocale = savedLocale || import.meta.env.VITE_DEFAULT_LOCALE || 'en';

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: { en },
});

/**
 * Lazy-load a non-default locale on demand.
 * Call this when switching languages at runtime.
 */
export async function loadLocale(locale) {
  if (i18n.global.availableLocales.includes(locale)) return;
  const messages = await import(`./locales/${locale}.json`);
  i18n.global.setLocaleMessage(locale, messages.default);
}

// Pre-load the saved locale if it isn't English
if (defaultLocale !== 'en') {
  loadLocale(defaultLocale);
}

export default i18n;
