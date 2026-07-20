"use strict";

/* ==========================================
   LUNOVIA Jewellery
   Search Manager
========================================== */

const Search = {

    query: "",

    results: [],

    init() {

        console.log("Search Ready");

    },

    search(query = "") {

        this.query = query.trim().toLowerCase();

        if (!this.query) {

            this.results = Products.getAll();

            return this.results;

        }

        this.results = Products.getAll().filter(product => {

            return (
                product.name.toLowerCase().includes(this.query) ||
                product.category.toLowerCase().includes(this.query) ||
                product.brand.toLowerCase().includes(this.query) ||
                product.description.toLowerCase().includes(this.query)
            );

        });

        return this.results;

    },

    clear() {

        this.query = "";

        this.results = [];

    },

    getResults() {

        return this.results;

    }

};

