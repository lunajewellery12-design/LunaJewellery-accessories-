/**
 * ==========================================
 * LUNOVIA Jewellery
 * Checkout Manager
 * ==========================================
 */

const CheckoutManager = {

    cart: [],
    total: 0,

    init() {
        this.loadCart();
        this.calculateTotal();
        this.renderSummary();
        this.bindEvents();
    },

    loadCart() {
        try {
            this.cart = JSON.parse(localStorage.getItem("lunovia_cart")) || [];
        } catch (e) {
            this.cart = [];
        }
    },

    calculateTotal() {

        this.total = this.cart.reduce((sum, item) => {

            const price = Number(item.price) || 0;
            const qty = Number(item.quantity) || 1;

            return sum + (price * qty);

        }, 0);

    },

    renderSummary() {

        const totalElement = document.querySelector("[data-checkout-total]");

        if (totalElement) {
            totalElement.textContent = `$${this.total.toFixed(2)}`;
        }

        const countElement = document.querySelector("[data-checkout-count]");

        if (countElement) {
            countElement.textContent = this.cart.length;
        }

    },

    validateForm(form) {

        const required = form.querySelectorAll("[required]");

        for (const input of required) {

            if (!input.value.trim()) {

                input.focus();
                return false;

            }

        }

        return true;

    },

    placeOrder(form) {

        if (!this.validateForm(form)) {

            alert("Please complete all required fields.");
            return;

        }

        const order = {

            id: Date.now(),

            items: this.cart,

            total: this.total,

            createdAt: new Date().toISOString()

        };

        localStorage.setItem("lunovia_last_order", JSON.stringify(order));

        localStorage.removeItem("lunovia_cart");

        alert("Your order has been placed successfully!");

        window.location.href = "index.html";

    },

    bindEvents() {

        const form = document.querySelector("#checkout-form");

        if (!form) return;

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            this.placeOrder(form);

        });

    }

};

document.addEventListener("DOMContentLoaded", () => {

    CheckoutManager.init();

});
