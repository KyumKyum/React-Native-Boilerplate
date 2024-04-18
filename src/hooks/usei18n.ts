import '../locales/i18n';
import {TFunction} from 'i18next';
import {useTranslation} from 'react-i18next';

function useI18n(): TFunction {
    const {t} = useTranslation();
    return t;
}

export default useI18n;
