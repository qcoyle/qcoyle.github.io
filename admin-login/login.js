const app = new Vue({
    el: "#app",
    data: {
        siteName: "quinncoyle.com",
        siteDescription: "Personal website",
        username: "",
        password: "",
        loggedIn: false
    },
    methods: {
        login: function(event) {
            event.preventDefault();
            window.alert("ERROR: Invalid Username/Password");
        }
    }
});