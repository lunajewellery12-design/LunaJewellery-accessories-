"use strict";

/* ==========================================
   LUNOVIA Jewellery
   Wishlist
========================================== */

const Wishlist = {

    items: [],

    init() {

        this.items = StorageManager.load(
            StorageManager.keys.wishlist,
            []
        );

        console.log("Wishlist Ready");

    },

    save() {

        StorageManager.save(
            StorageManager.keys.wishlist,
            this.items
        );

    },

    getItems() {

        return this.items;

    },

    getCount() {

        return this.items.length;

    },

    has(productId) {

        return this.items.includes(productId);

    },

    add(productId) {

        if (!this.has(productId)) {

            this.items.push(productId);

            this.save();

           UI.updateWishlistCount();

        }

    },

    remove(productId) {

        this.items = this.items.filter(
            id => id !== productId
        );

        this.save();

       UI.updateWishlistCount();

    },

    toggle(productId) {

        if (this.has(productId)) {

            this.remove(productId);

        } else {

            this.add(productId);

        }

    },

    clear() {

        this.items = [];

        this.save();

       UI.updateWishlistCount();

    }

};
