const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project-card");
const form = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    projects.forEach((project) => {
      project.classList.toggle("hidden", filter !== "all" && !project.classList.contains(`project-${filter}`));
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    formStatus.textContent = "Please complete all fields with valid information.";
    formStatus.style.color = "#b04c41";
    form.reportValidity();
    return;
  }

  formStatus.textContent = "Thanks! Your message is ready to send.";
  formStatus.style.color = "#6d7d19";
  form.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
