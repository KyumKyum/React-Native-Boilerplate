import SUPPORTING_LANGUAGE from './supportingLanguage.ts';
import language from '../storage/LanguageStorage.ts';
import i18n from 'i18next';

const changeLanguage = (lang: SUPPORTING_LANGUAGE) => {
    language.set(lang);
    i18n.changeLanguage(lang);
};

export default changeLanguage;
