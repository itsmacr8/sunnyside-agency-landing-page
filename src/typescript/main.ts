const toggleButton = document.querySelector(".toggle-button")! as HTMLDivElement;
const navbarLinks = document.querySelector(".navbar-links")! as HTMLDivElement;

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});
