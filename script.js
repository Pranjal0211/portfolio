// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav__toggle");
const links = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  links.classList.toggle("is-open", !open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    toggle.setAttribute("aria-expanded", "false");
    links.classList.remove("is-open");
  }
});

// Fade sections in as they scroll into view
const revealer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      revealer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => revealer.observe(el));

// Highlight the nav link for the section in view
const navLinks = [...links.querySelectorAll('a[href^="#"]')];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

// Project filters
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".card");
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.toggle("is-active", c === chip));
    const filter = chip.dataset.filter;
    cards.forEach((card) => {
      card.hidden = filter !== "all" && !card.dataset.cat.split(" ").includes(filter);
    });
  });
});

// Skills tabs (arrow keys move between tabs)
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  });
  tab.focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") selectTab(tabs[(i + 1) % tabs.length]);
    if (e.key === "ArrowLeft") selectTab(tabs[(i - 1 + tabs.length) % tabs.length]);
  });
});
