const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".nav-btn");

function showPage(index) {
    pages.forEach(p => p.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));

    pages[index].classList.add("active");
    buttons[index].classList.add("active");
}