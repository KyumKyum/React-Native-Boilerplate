import SUPPORTING_LANGUAGE from './supportingLanguage';
import language from '../storage/LanguageStorage';
import i18n from 'i18next';

const changeLanguage = (lang: SUPPORTING_LANGUAGE) => {
    language.set(lang);
    i18n.changeLanguage(lang);
};

export default changeLanguage;
