import {MMKV} from 'react-native-mmkv';

class MMKVStorage {
    private static _storage: MMKV | null = null;

    private constructor() {}

    public static getInstance(): MMKV {
        if (!MMKVStorage._storage) {
            MMKVStorage._storage = new MMKV();
        }
        return MMKVStorage._storage;
    }
}

export default MMKVStorage;
