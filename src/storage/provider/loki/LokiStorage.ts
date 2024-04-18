import Loki from 'lokijs';

class LokiStorage {
    private static _storage: Loki | null = null;

    public static getInstance(): Loki {
        if (!this._storage) {
            this._storage = new Loki('KVStorage', {
                autoload: true,
                autoloadCallback: () => {
                    this._storage?.addCollection('entries');
                },
                autosave: true,
                autosaveInterval: 5000,
            });
        }

        return this._storage;
    }
}

export default LokiStorage;
