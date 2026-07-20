"use strict";

/* ==========================================
   LUNOVIA Jewellery
   Storage Manager
========================================== */

const StorageManager = {

    keys: {

        cart: "lunovia_cart",

        wishlist: "lunovia_wishlist",

        user: "lunovia_user",

        settings: "lunovia_settings"

    },

    init() {

        console.log("Storage Ready");

    },

    save(key, value) {

        localStorage.setItem(key, JSON.stringify(value));

    },

    load(key, defaultValue = null) {

        const data = localStorage.getItem(key);

        if (!data) return defaultValue;

        try {

            return JSON.parse(data);

        } catch {

            return defaultValue;

        }

    },

    remove(key) {

        localStorage.removeItem(key);

    },

    clear() {

        localStorage.clear();

    },

    exists(key) {

        return localStorage.getItem(key) !== null;

    }

};
