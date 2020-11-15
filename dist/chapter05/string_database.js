"use strict";
class StringDatabase {
    constructor() {
        this.state = {};
    }
    get(key) {
        return key in this.state ? this.state[key] : null;
    }
    set(key, value) {
        this.state[key] = value;
    }
    static from(state) {
        let db = new StringDatabase;
        for (const k in state) {
            db.set(k, state[k]);
        }
        return db;
    }
}
