//* Store for user interaction.
//* This can be used to debounce user touch event, or to set timeout for user session, or extra.

import {action, makeObservable, observable} from 'mobx';

class UserInteractionStore {
    lastInteractionTimestamp: number = Date.now();

    updateLastInteraction(): void {
        this.lastInteractionTimestamp = Date.now();
    }

    constructor() {
        makeObservable(this, {
            lastInteractionTimestamp: observable,
            updateLastInteraction: action,
        });
    }
}

const userInteractionStore = new UserInteractionStore();

export default userInteractionStore;
