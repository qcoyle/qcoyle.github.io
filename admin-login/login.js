const app = new Vue({
    el: "#app",
    data: {
        siteName: "quinncoyle.com",
        siteDescription: "Personal website",
        username: "",
        password: "",
        loggedIn: false
    },
    computed: {
        login: function() {
            if (loggedIn) {
                login();
            }
        }
    }
});

const login = () => {
    console.log("We're logged in!")
}