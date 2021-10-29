const app = new Vue({
    el: '#app',
    data: {
        age: "",
        submitted: false
    },
    computed: {
        ageLevel: {
            get: function() {
                if (this.age >= 0) {
                    if (this.age < 18) {
                        return "Child";
                    } else if (this.age < 35) {
                        return "Young adult";
                    } else if (this.age < 65) {
                        return "Adult";
                    } else {
                        return "Senior";
                    }
                }
            },
            set: function(newAgeLevel) {
                if (newAgeLevel === "Child") {
                    this.age = 0;
                } else if (newAgeLevel === "Young adult") {
                    this.age = 18;
                } else if (newAgeLevel === "Adult") {
                    this.age = 35;
                } else if (newAgeLevel === "Senior") {
                    this.age = 65;
                }
            }
        }
    }
});



const app = new Vue({
    el: "#app",
    data: {
        hoursStudied: 300
    },
    methods: {
        resetProgress: function() {
            this.hoursStudied = 0;
        }
    }
});