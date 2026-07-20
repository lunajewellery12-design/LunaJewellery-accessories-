"use strict";

/* ==========================================
   LUNOVIA Jewellery
   UI Manager
========================================== */

const UI = {

    init() {

        console.log("UI Ready");

        this.updateCartCount();
        this.updateWishlistCount();

    },

    updateCartCount() {

        const badges = document.querySelectorAll("[data-cart-count]");

        const count = Cart.getCount();

        badges.forEach(badge => {

            badge.textContent = count;

        });

    },

    updateWishlistCount() {

        const badges = document.querySelectorAll("[data-wishlist-count]");

        const count = Wishlist.getCount();

        badges.forEach(badge => {

            badge.textContent = count;

        });

    },

    showToast(message, type = "success") {

        console.log(`[${type.toUpperCase()}] ${message}`);

    },

    formatPrice(price) {

        return Utils.formatPrice(price);

    }

};
