// src/shared/lib/i18n.ts
import i18n from 'i18next';
import * as ReactI18Next from 'react-i18next';

import commonRu from '../assets/locales/ru/common.json';
import commonEn from '../assets/locales/en/common.json';

i18n
    .use(ReactI18Next.initReactI18next)
    .init({
        resources: {
            ru: { common: commonRu },
            en: { common: commonEn },
        },
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,
        ns: ['common'],
        defaultNS: 'common',
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
