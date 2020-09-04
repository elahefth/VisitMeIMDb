import i18n from 'i18n-js';
import fa from '../assets/translations/fa';
import en from '../assets/translations/en';

i18n.fallbacks = true;
i18n.locale = 'en';

i18n.translations = {
  fa,
  en,
};

export default i18n;
