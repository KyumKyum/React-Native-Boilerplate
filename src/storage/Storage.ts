import {MMKV} from 'react-native-mmkv';
import MMKVStorage from './mmkv/MMKVStorage.ts';

abstract class Storage {
    protected storage: MMKV;

    protected constructor() {
        this.storage = MMKVStorage.getInstance();
    }

    abstract set(value: string): void;
    abstract get(): string;
}

export default Storage;
