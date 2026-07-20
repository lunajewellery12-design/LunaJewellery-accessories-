/**
 * ==========================================
 * LUNOVIA Jewellery
 * Language Manager
 * ==========================================
 */

const LanguageManager = {

    storageKey: "lunovia_language",

    currentLanguage: "en",

    supportedLanguages: ["en", "ar"],

    init() {

        const saved = localStorage.getItem(this.storageKey);

        if (saved && this.supportedLanguages.includes(saved)) {
            this.currentLanguage = saved;
        }

        this.applyLanguage();
        this.bindEvents();

    },

    setLanguage(language) {

        if (!this.supportedLanguages.includes(language)) return;

        this.currentLanguage = language;

        localStorage.setItem(this.storageKey, language);

        this.applyLanguage();

    },

    applyLanguage() {

        document.documentElement.lang = this.currentLanguage;
        document.documentElement.dir =
            this.currentLanguage === "ar" ? "rtl" : "ltr";

        document.querySelectorAll("[data-lang]").forEach(element => {

            const key = element.dataset.lang;

            if (
                window.TRANSLATIONS &&
                TRANSLATIONS[this.currentLanguage] &&
                TRANSLATIONS[this.currentLanguage][key]
            ) {
                element.textContent =
                    TRANSLATIONS[this.currentLanguage][key];
            }

        });

    },

    toggleLanguage() {

        this.setLanguage(
            this.currentLanguage === "en" ? "ar" : "en"
        );

    },

    bindEvents() {

        document.querySelectorAll("[data-language]").forEach(button => {

            button.addEventListener("click", () => {

                this.setLanguage(button.dataset.language);

            });

        });

    }

};

document.addEventListener("DOMContentLoaded", () => {

    LanguageManager.init();

});
