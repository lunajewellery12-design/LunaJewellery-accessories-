"use strict";

/* ==========================================
   LUNOVIA Jewellery
   Main Application
========================================== */

const LUNOVIA = {

    version: "1.0.0",

    country: "EG",

    currency: "EGP",

    language: "ar",

    initialized: false,

    init() {

        if (this.initialized) return;

        this.initialized = true;

        console.log("LUNOVIA Jewellery Started");

        this.initializeModules();

    },

    initializeModules() {

        if (typeof Utils !== "undefined") Utils.init();

        if (typeof StorageManager !== "undefined") StorageManager.init();

        if (typeof Products !== "undefined") Products.init();

        if (typeof Cart !== "undefined") Cart.init();

        if (typeof Wishlist !== "undefined") Wishlist.init();

        if (typeof Search !== "undefined") Search.init();

        if (typeof UI !== "undefined") UI.init();

        if (typeof Home !== "undefined") Home.init();

        if (typeof Auth !== "undefined") Auth.init();

        if (typeof Slider !== "undefined") Slider.init();

    }

};

document.addEventListener("DOMContentLoaded", () => {

    LUNOVIA.init();

});
