import Storage from './Storage.ts';

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
        const lang = super.storage.getString(LANGUAGE_STORAGE);
        if (lang === undefined) return 'EN';
        return lang;
    }

    set(value: string): void {
        const lang = value.toLowerCase() === 'en' ? 'en' : 'ko';
        super.storage.set(LANGUAGE_STORAGE, lang);
    }
}

const language = LanguageStorage.getInstance();

export default language;
