const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const moreToggle = document.querySelector(".more-toggle");
const moreMenu = document.querySelector("#more-menu");
const form = document.querySelector(".lead-form");
const statusText = document.querySelector(".form-status");

const closeMoreMenu = () => {
  moreToggle?.setAttribute("aria-expanded", "false");
  if (moreMenu) moreMenu.hidden = true;
};

const closeNav = () => {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  closeMoreMenu();
};

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
  if (isOpen) closeMoreMenu();
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNav();
  }
});

moreToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = moreToggle.getAttribute("aria-expanded") === "true";
  moreToggle.setAttribute("aria-expanded", String(!isOpen));
  if (moreMenu) moreMenu.hidden = isOpen;
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Node)) return;

  if (moreMenu && moreToggle && !moreMenu.contains(target) && !moreToggle.contains(target)) {
    closeMoreMenu();
  }

  if (nav && navToggle && !nav.contains(target) && !navToggle.contains(target)) {
    closeNav();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNav();
});

const revealTargets = document.querySelectorAll(
  ".section-shell, .impact, .contact, .solution-card, .program-list article, .value-grid article, .list-grid article, .article-grid article"
);

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach((target) => target.classList.add("reveal"));
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
  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    statusText.textContent = "Complete the required fields before preparing the enquiry.";
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const name = `${data.get("firstName")} ${data.get("lastName")}`.trim();
  const subject = encodeURIComponent("neOOne website enquiry");
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      "",
      String(data.get("message")),
    ].join("\n")
  );

  statusText.textContent = "Opening your email app with the enquiry details.";
  window.location.href = `mailto:admin@neoone.com.my?subject=${subject}&body=${body}`;
});
