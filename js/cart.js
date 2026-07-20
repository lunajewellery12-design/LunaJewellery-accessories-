"use strict";

/* ==========================================
   LUNOVIA Jewellery
   Shopping Cart
========================================== */

const Cart = {

    items: [],

    init() {

        this.items = StorageManager.load(
            StorageManager.keys.cart,
            []
        );

        console.log("Cart Ready");

    },

    save() {

        StorageManager.save(
            StorageManager.keys.cart,
            this.items
        );

    },

    getItems() {

        return this.items;

    },

    getCount() {

          add(productId, quantity = 1) {

        const existing = this.items.find(
            item => item.productId === productId
        );

        if (existing) {

            existing.quantity += quantity;

        } else {

            this.items.push({

                productId,

                quantity

            });

        }

        this.save();

             UI.updateCartCount();

        return true;

    },

    remove(productId) {

        this.items = this.items.filter(
            item => item.productId !== productId
        );

        this.save();

       UI.updateCartCount();

    },

    clear() {

        this.items = [];

        this.save();

       UI.updateCartCount();

          updateQuantity(productId, quantity) {

        const item = this.items.find(
            item => item.productId === productId
        );

        if (!item) return;

        if (quantity <= 0) {

            this.remove(productId);

            return;

        }

        item.quantity = quantity;

        this.save();

             UI.updateCartCount();

    },

    getSubtotal() {

        return this.items.reduce((total, item) => {

            const product = Products.getById(item.productId);

            if (!product) return total;

            return total + (product.price * item.quantity);

        }, 0);

    },

    getShipping() {

        const subtotal = this.getSubtotal();

        return subtotal >= 3000 ? 0 : 150;

    },

    getTotal() {

        return this.getSubtotal() + this.getShipping();

    },

    isEmpty() {

        return this.items.length === 0;

    }

    }

        return this.items.reduce(
            (total, item) => total + item.quantity,
            0
        );

    }

};

