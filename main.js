(function () {
  const html = document.documentElement;

  // Theme
  html.dataset.theme =
    localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  function updatePhoto(theme) {
    const photo = document.getElementById("about-photo");
    if (photo) {
      photo.src = theme === "light" ? "light.jpg" : "dark.jpg";
    }
  }

  // Copyright year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = html.dataset.theme === "dark" ? "light" : "dark";

      html.dataset.theme = next;
      localStorage.setItem("theme", next);
      updatePhoto(next);
    });

    updatePhoto(html.dataset.theme);
  }

  // Mobile navigation
  const burger = document.querySelector(".nav__burger");
  const navLinks = document.querySelector(".nav__links");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      const open = burger.getAttribute("aria-expanded") === "true";

      burger.setAttribute("aria-expanded", String(!open));
      navLinks.classList.toggle("is-open", !open);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burger.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
      });
    });
  }

  // Projects show more / show less
  const projectsGrid = document.getElementById("projects-grid");
  const projectsToggle = document.getElementById("projects-toggle");

  if (projectsGrid && projectsToggle) {
    projectsToggle.addEventListener("click", () => {
      const expanded = projectsGrid.classList.toggle("is-expanded");

      projectsToggle.textContent = expanded ? "Show less" : "Show more";
      projectsToggle.setAttribute("aria-expanded", String(expanded));

      if (!expanded) {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

  // Scroll-triggered fade-in
  const fadeEls = document.querySelectorAll(".hero, .about__grid, .timeline-item, .skills-group, .contact__inner");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeEls.forEach((el, index) => {
      el.classList.add("fade-up");
      el.style.transitionDelay = `${(index % 4) * 80}ms`;
      observer.observe(el);
    });
  }
})();
