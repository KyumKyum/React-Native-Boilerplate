import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Config from 'react-native-config';

import en from './en.json';
import ko from './ko.json';
import SUPPORTING_LANGUAGE from './supportingLanguage';

const translationResources = {
    en: {
        translation: en,
    },
    ko: {
        translation: ko,
    },
};

i18n.use(initReactI18next) // Detect User Language // i18n -> react-i18next
    .init({
        //Init block
        debug: Config.ENV === 'DEVELOPMENT',
        fallbackLng: SUPPORTING_LANGUAGE.ENGLISH, // Default Language
        interpolation: {
            escapeValue: false, // Prevent XSS Attack
        },
        supportedLngs: [
            SUPPORTING_LANGUAGE.ENGLISH,
            SUPPORTING_LANGUAGE.KOREAN,
        ],
        resources: translationResources,
        defaultNS: 'translation',
        compatibilityJSON: 'v3',
    });
