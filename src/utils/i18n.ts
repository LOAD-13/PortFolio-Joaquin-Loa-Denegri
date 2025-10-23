// src/utils/i18n.ts

import { translations, type Language } from './translations';

export function getLang(): Language {
  if (typeof window === 'undefined') return 'es';
  
  const stored = localStorage.getItem('lang');
  return (stored === 'en' || stored === 'es') ? stored : 'es';
}

export function setLang(lang: Language) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('lang', lang);
}

export function t(lang: Language = 'es') {
  return translations[lang];
}