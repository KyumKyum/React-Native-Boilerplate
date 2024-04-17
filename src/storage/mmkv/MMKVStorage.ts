import {MMKV} from 'react-native-mmkv';

class MMKVStorage {
    private static instance: MMKV | null = null;

    private constructor() {}

    public static getInstance(): MMKV {
        if (!MMKVStorage.instance) {
            MMKVStorage.instance = new MMKV();
        }
        return MMKVStorage.instance;
    }
}

export default MMKVStorage;
