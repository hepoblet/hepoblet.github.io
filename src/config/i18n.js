import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    resources: [],
  });

i18n.addResources('en', 'translations', {
  title: 'Title',
  description: 'This is a description.',
  more: 'More',
});

i18n.addResources('es', 'translations', {
  title: 'Título',
  description: 'Esta es una descripción.',
  more: 'Más',
});

export default i18n;
