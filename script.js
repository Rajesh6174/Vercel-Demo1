// Sticky header shadow on scroll
const header = document.querySelector(".site-header");
const onScroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll-reveal animation
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form — no backend wired up, so hand off to the visitor's mail client
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const company = document.getElementById("company").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`P&L demo request from ${name || "website visitor"}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
  );

  window.location.href = `mailto:hello@vercel-demo1.com?subject=${subject}&body=${body}`;
  formNote.textContent = "Opening your email client to send this message…";
});
