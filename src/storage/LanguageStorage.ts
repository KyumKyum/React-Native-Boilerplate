import Storage from './provider/Storage';

//* Ensures Singleton pattern for storage

const LANGUAGE_STORAGE = 'LANGUAGE_STORAGE';
class LanguageStorage extends Storage {
    private static instance: LanguageStorage | null = null;

    constructor() {
        super();
    }

    public static getInstance(): LanguageStorage {
        if (!LanguageStorage.instance)
            LanguageStorage.instance = new LanguageStorage();

        return LanguageStorage.instance;
    }

    get(): string {
        const lang = super.get(LANGUAGE_STORAGE);
        if (lang === undefined) return 'EN';
        return lang;
    }

    set(value: string): void {
        const lang = value.toLowerCase() === 'en' ? 'en' : 'ko';
        super.set(LANGUAGE_STORAGE, lang);
    }

    remove(key: string): void {
        super.remove(key);
    }
}

const language = LanguageStorage.getInstance();

export default language;
