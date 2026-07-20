"use strict";

/* ==========================================
   LUNOVIA Jewellery
   Products Manager
========================================== */

const Products = {

    items: [],

    categories: [

        {
            id: "rings",
            name: "Rings"
        },

        {
            id: "necklaces",
            name: "Necklaces"
        },

        {
            id: "bracelets",
            name: "Bracelets"
        },

        {
            id: "earrings",
            name: "Earrings"
        },

        {
            id: "anklets",
            name: "Anklets"
        },

        {
            id: "watches",
            name: "Luxury Watches"
        }

    ],

    init() {

        console.log("Products Ready");

        this.loadProducts();

    },

    loadProducts() {

    this.items = [

        {
            id: 1,
            sku: "LNV-RNG-001",
            name: "Royal Diamond Ring",
            category: "rings",
            brand: "LUNOVIA",
            price: 8950,
            oldPrice: 9950,
            discount: 10,
            currency: "EGP",
            image: "assets/images/products/ring-01.jpg",
            gallery: [
                "assets/images/products/ring-01.jpg",
                "assets/images/products/ring-01-2.jpg"
            ],
            stock: 8,
            rating: 4.9,
            reviews: 86,
            featured: true,
            newArrival: true,
            bestSeller: true,
            offer: true,
            description: "Elegant 18K gold ring with a brilliant diamond centerpiece."
        },

        {
            id: 2,
            sku: "LNV-RNG-002",
            name: "Aurora Gold Ring",
            category: "rings",
            brand: "LUNOVIA",
            price: 6450,
            oldPrice: 7200,
            discount: 10,
            currency: "EGP",
            image: "assets/images/products/ring-02.jpg",
            gallery: [
                "assets/images/products/ring-02.jpg",
                "assets/images/products/ring-02-2.jpg"
            ],
            stock: 12,
            rating: 4.8,
            reviews: 41,
            featured: true,
            newArrival: false,
            bestSeller: true,
            offer: true,
            description: "Luxury gold ring crafted for timeless elegance."
        }

    ];

},

    getAll() {

        return this.items;

    },

    getById(id) {

        return this.items.find(product => product.id === id);

    },

    getByCategory(category) {

        return this.items.filter(product => product.category === category);

    },

    getFeatured() {

        return this.items.filter(product => product.featured);

    },

    getNewArrivals() {

        return this.items.filter(product => product.newArrival);

    },

    getBestSellers() {

        return this.items.filter(product => product.bestSeller);

    },

    getOffers() {

        return this.items.filter(product => product.offer);

    }

      search(query) {

        if (!query) return this.items;

        query = query.toLowerCase();

        return this.items.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query)
        );

    },

    getRelated(productId) {

        const product = this.getById(productId);

        if (!product) return [];

        return this.items
            .filter(item =>
                item.category === product.category &&
                item.id !== product.id
            )
            .slice(0, 4);

    },

    isInStock(productId) {

        const product = this.getById(productId);

        return product ? product.stock > 0 : false;

    },

    updateStock(productId, quantity = 1) {

        const product = this.getById(productId);

        if (!product) return false;

        if (product.stock < quantity) return false;

        product.stock -= quantity;

        return true;

    }

};

