document.addEventListener("DOMContentLoaded", () => {
  initializeMobileNavigationToggle();
  setupContactFormValidation();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});

function initializeMobileNavigationToggle() {
  const toggleButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggleButton || !nav) return;

  const updateExpanded = (expanded) => {
    toggleButton.setAttribute("aria-expanded", String(expanded));
    nav.classList.toggle("is-open", expanded);
  };

  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    updateExpanded(!isExpanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => updateExpanded(false));
  });
}

function setupContactFormValidation() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const errors = [];
    if (name.length < 2) errors.push("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Please enter a valid email.");
    if (message.length < 10) errors.push("Please write a longer message.");

    if (errors.length > 0) {
      status.textContent = errors.join(" ");
      status.style.color = "#b91c1c";
      return;
    }

    status.textContent = "Thanks! Your message has been sent (demo).";
    status.style.color = "#15803d";
    form.reset();
  });
}