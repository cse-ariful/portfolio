(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById(button.dataset.id).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");

        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
