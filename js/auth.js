/**
 * ==========================================
 * LUNOVIA Jewellery
 * Authentication Manager
 * ==========================================
 */

const AuthManager = {

    storageKey: "lunovia_user",

    currentUser: null,

    init() {
        this.loadUser();
        this.updateUI();
        this.bindEvents();
    },

    loadUser() {
        const data = localStorage.getItem(this.storageKey);

        if (data) {
            try {
                this.currentUser = JSON.parse(data);
            } catch (e) {
                this.currentUser = null;
            }
        }
    },

    saveUser(user) {
        this.currentUser = user;
        localStorage.setItem(this.storageKey, JSON.stringify(user));
        this.updateUI();
    },

    logout() {
        this.currentUser = null;
        localStorage.removeItem(this.storageKey);
        this.updateUI();
    },

    isLoggedIn() {
        return this.currentUser !== null;
    },

    login(email, password) {

        if (!email || !password) {
            return false;
        }

        const user = {
            name: email.split("@")[0],
            email: email,
            loginDate: new Date().toISOString()
        };

        this.saveUser(user);

        return true;
    },

    register(name, email, password) {

        if (!name || !email || !password) {
            return false;
        }

        const user = {
            name,
            email,
            createdAt: new Date().toISOString()
        };

        this.saveUser(user);

        return true;
    },

    updateUI() {

        const userName = document.querySelectorAll(".user-name");

        userName.forEach(item => {

            item.textContent = this.currentUser
                ? this.currentUser.name
                : "Guest";

        });

    },

    bindEvents() {

        document.querySelectorAll("[data-logout]").forEach(btn => {

            btn.addEventListener("click", () => {

                this.logout();

                location.reload();

            });

        });

    }

};

document.addEventListener("DOMContentLoaded", () => {

    AuthManager.init();

});
