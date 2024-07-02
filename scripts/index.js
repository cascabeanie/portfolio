/* code for responsive navbar */

const toggleNav = () => {
  const elements = {
    outerGrid: document.querySelector(".outer-grid"),
    navigationBar: document.querySelector("nav"),
    hamburgerAnimation: document.querySelector(".hamburger-menu-icon"),
  };

  elements.outerGrid.classList.toggle("outer-grid-expanded");
  elements.navigationBar.classList.toggle("hide-nav");
  elements.hamburgerAnimation.classList.toggle("hamburger-animation");
};

/* code for title transitions */

const sectionTitles = document.querySelectorAll(".titles");

const observerOptions = {
  root: null,
  threshold: 1,
  rootMargin: "0px 0px -50px 0px",
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("title-animation");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

sectionTitles.forEach((title) => {
  observer.observe(title);
});

/* code for project card transitions */

const toggleCardOverlay = (projectClass, buttonClass) => {
  const project = document.querySelector(projectClass);
  project.classList.toggle("overlay-styles-on");

  const tileTransition = document.querySelector(buttonClass);
  tileTransition.classList.toggle("tile-animation");
};

/* code for dark mode toggle */

let darkModeSetting = localStorage.getItem("darkModeSetting");
const darkModeToggle = document.querySelector(".dark-mode-btn");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkModeSetting", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkModeSetting", null);
};

if (darkModeSetting === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkModeSetting = localStorage.getItem("darkModeSetting");

  if (darkModeSetting !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
