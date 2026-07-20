"use strict";

/* ==========================================
   LUNOVIA Jewellery
   Utilities
========================================== */

const Utils = {

    init() {

        console.log("Utils Ready");

    },

    $(selector, parent = document) {

        return parent.querySelector(selector);

    },

    $$(selector, parent = document) {

        return [...parent.querySelectorAll(selector)];

    },

    create(tag, className = "") {

        const element = document.createElement(tag);

        if (className) {

            element.className = className;

        }

        return element;

    },

    formatPrice(price) {

        return new Intl.NumberFormat("ar-EG", {

            style: "currency",

            currency: "EGP",

            maximumFractionDigits: 2

        }).format(price);

    },

    randomID(length = 12) {

        return Math.random().toString(36).substring(2, length + 2);

    },

    debounce(callback, delay = 300) {

        let timer;

        return (...args) => {

            clearTimeout(timer);

            timer = setTimeout(() => callback(...args), delay);

        };

    },

    scrollTop() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    },

    isMobile() {

        return window.innerWidth < 768;

    }

};
