import {MMKV} from 'react-native-mmkv';
import MMKVStorage from './mmkv/MMKVStorage';

class Storage {
    private storage: MMKV;

    protected constructor() {
        this.storage = MMKVStorage.getInstance();
    }

    protected set(key: string, value: string): void {
        this.storage.set(key, value);
    }
    protected get(key: string): string | undefined {
        return this.storage.getString(key);
    }
    protected remove(key: string): void {
        this.storage.delete(key);
    }
}

export default Storage;
