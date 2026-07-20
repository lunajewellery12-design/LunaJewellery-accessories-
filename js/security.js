/**
 * ==========================================
 * LUNOVIA Jewellery
 * Security Manager
 * ==========================================
 */

const SecurityManager = {

    init() {
        this.disableAutocomplete();
        this.protectForms();
    },

    escapeHTML(text) {

        if (typeof text !== "string") return "";

        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    },

    sanitizeInput(value) {
        return this.escapeHTML(value.trim());
    },

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    validatePhone(phone) {
        return /^[0-9+\-\s]{8,20}$/.test(phone);
    },

    validatePassword(password) {

        return (
            password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password)
        );

    },

    disableAutocomplete() {

        document.querySelectorAll("input[type=password]").forEach(input => {
            input.setAttribute("autocomplete", "new-password");
        });

    },

    protectForms() {

        document.querySelectorAll("form").forEach(form => {

            form.addEventListener("submit", () => {

                form.querySelectorAll("input, textarea").forEach(field => {

                    if (field.type !== "password") {
                        field.value = this.sanitizeInput(field.value);
                    }

                });

            });

        });

    }

};

document.addEventListener("DOMContentLoaded", () => {

    SecurityManager.init();

});
