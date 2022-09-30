(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById(button.dataset.id).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
    document.querySelector("#messageBtn").addEventListener("click", () => {
        // let name = document.querySelector("#nameField").value;
        let message = document.querySelector("#messageField").value;
        window.location.href = "mailto:cse.ariful@gmail.com?subject=PortFolio Contact&body=" + message;
    })
    document.getElementById('portfolio').style.display = 'none';
    document.getElementById('blogs').style.display = 'none';
})();
