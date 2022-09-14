const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("box-shadow", window.scrollY > 0);
})

if (window.matchMedia("(max-width: 1190px)").matches) {
    const contactImage = document.querySelector(".contact-right img");
    contactImage.style.display = "none";
}

if (window.matchMedia("(max-width: 425px)").matches) {
    const phoneBackground = document.querySelector(".phone-background");

    phoneBackground.setAttribute("src", "images/bg-intro-mobile.svg")

}

if (window.matchMedia("(max-width: 635px)").matches) {
    const menu = document.querySelector(".menu-btn");
    const close = document.querySelector(".close-btn");
    const mobileNav = document.querySelector(".navlist ul");
    const navLinks = document.querySelectorAll(".navlist a")
    menu.addEventListener("click", () => {
        menu.style.display = "none"
        close.style.display = "block";
        mobileNav.style.top = "3rem";
    })
    close.addEventListener("click", () => {
        menu.style.display = "block"
        mobileNav.style.top = "-15rem";
        close.style.display = "none";
    })

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", () => {
            mobileNav.style.top = "-15rem";
            close.style.display = "none";
            menu.style.display = "block"
        })
    }
}