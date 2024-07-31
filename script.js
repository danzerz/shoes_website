// section-1
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// navbar

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navbar = document.getElementById("navbar");
  const searchBtn = document.getElementById("search-btn");
  const searchForm = document.getElementById("search-form");

  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });

  searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("show"); // Hide navbar if search is opened
  });
});
