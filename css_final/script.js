// Section 1: Panel Interaction
const panels = document.querySelectorAll(".panel");

// Add click event listeners to all panels
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // Remove 'active' class from all panels
    removeActiveClasses();
    // Add 'active' class to the clicked panel
    panel.classList.add("active");
  });
});

// Function to remove 'active' class from all panels
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// Navbar Interaction
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the menu button, navbar, search button, and search form
  const menuBtn = document.getElementById("menu-btn");
  const navbar = document.getElementById("navbar");
  const searchBtn = document.getElementById("search-btn");
  const searchForm = document.getElementById("search-form");

  // Add click event listener to the menu button
  menuBtn.addEventListener("click", function () {
    // Toggle the 'show' class on the navbar to show or hide it
    navbar.classList.toggle("show");
  });

  // Add click event listener to the search button
  searchBtn.addEventListener("click", () => {
    // Toggle the 'active' class on the search form to show or hide it
    searchForm.classList.toggle("active");
    // Hide the navbar if the search form is opened
    navbar.classList.remove("show");
  });
});
