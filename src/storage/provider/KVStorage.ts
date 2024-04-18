import Loki from 'lokijs';
import LokiStorage from './loki/LokiStorage';

class KVStorage {
    private storage: Loki;
    private entries: Collection<any>;

    protected constructor() {
        this.storage = LokiStorage.getInstance();
        this.entries = this.storage.getCollection('entries');
    }

    protected set(key: string, value: string) {
        const entry = this.entries.findOne({key});
        if (entry) {
            entry.value = value;
            this.entries.update(entry);
        } else {
            this.entries.insert({key, value});
        }
    }

    protected get(key: string): string | null {
        const entry = this.entries.findOne({key});
        return entry ? entry.value : null;
    }

    protected remove(key: string) {
        const entry = this.entries.findOne({key});
        if (entry) this.entries.remove(entry);
    }
}

export default KVStorage;
