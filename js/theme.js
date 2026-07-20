/**
 * ==========================================
 * LUNOVIA Jewellery
 * Theme Manager
 * ==========================================
 */

const ThemeManager = {

    storageKey: "lunovia_theme",

    currentTheme: "light",

    init() {

        const savedTheme = localStorage.getItem(this.storageKey);

        if (savedTheme) {
            this.currentTheme = savedTheme;
        } else {
            this.currentTheme = this.getSystemTheme();
        }

        this.applyTheme();
        this.bindEvents();

    },

    getSystemTheme() {

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

    },

    applyTheme() {

        document.documentElement.setAttribute(
            "data-theme",
            this.currentTheme
        );

        localStorage.setItem(
            this.storageKey,
            this.currentTheme
        );

    },

    setTheme(theme) {

        if (theme !== "light" && theme !== "dark") return;

        this.currentTheme = theme;

        this.applyTheme();

    },

    toggleTheme() {

        this.setTheme(
            this.currentTheme === "light"
                ? "dark"
                : "light"
        );

    },

    bindEvents() {

        document.querySelectorAll("[data-theme-toggle]").forEach(button => {

            button.addEventListener("click", () => {

                this.toggleTheme();

            });

        });

    }

};

document.addEventListener("DOMContentLoaded", () => {

    ThemeManager.init();

});
