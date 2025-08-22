document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.getElementById("primary-navigation");
  const navLinks = document.querySelectorAll(".nav-links a");
  const yearEl = document.getElementById("year");
  const form = document.getElementById("contact-form");
  const statusEl = document.querySelector(".form-status");

  // Footer year
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Mobile nav toggle
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      primaryNav.classList.toggle("open");
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form basic validation and simulated submit
  if (form && statusEl) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nameInput = /** @type {HTMLInputElement} */ (document.getElementById("name"));
      const emailInput = /** @type {HTMLInputElement} */ (document.getElementById("email"));
      const messageInput = /** @type {HTMLTextAreaElement} */ (document.getElementById("message"));

      const hints = {
        name: document.querySelector('.input-hint[data-for="name"]'),
        email: document.querySelector('.input-hint[data-for="email"]'),
        message: document.querySelector('.input-hint[data-for="message"]'),
      };

      let hasError = false;

      // Reset hints
      Object.values(hints).forEach((el) => el && (el.textContent = ""));

      if (!nameInput.value.trim()) {
        hasError = true;
        if (hints.name) hints.name.textContent = "Please enter your name.";
      }

      const emailVal = emailInput.value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      if (!emailVal || !emailOk) {
        hasError = true;
        if (hints.email) hints.email.textContent = "Please enter a valid email.";
      }

      if (!messageInput.value.trim()) {
        hasError = true;
        if (hints.message) hints.message.textContent = "Please enter a message.";
      }

      if (hasError) {
        statusEl.textContent = "Please fix the errors above.";
        return;
      }

      // Simulate sending
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.setAttribute("disabled", "true");
      statusEl.textContent = "Sending…";

      try {
        await new Promise((res) => setTimeout(res, 900));
        statusEl.textContent = "Thanks! Your message has been sent.";
        form.reset();
      } catch (err) {
        statusEl.textContent = "Something went wrong. Please try again.";
      } finally {
        if (submitBtn) submitBtn.removeAttribute("disabled");
      }
    });
  }
});