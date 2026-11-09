// Reveal service cards and review cards as the visitor scrolls.
const revealItems = document.querySelectorAll(".service, .review");

revealItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(24px)";
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

// Smooth-scroll navigation for header links.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Pause the marquee when a visitor hovers over it.
const marquee = document.querySelector(".marquee");
const marqueeTrack = document.querySelector(".marquee-track");

if (marquee && marqueeTrack) {
  marquee.addEventListener("mouseenter", () => {
    marqueeTrack.style.animationPlayState = "paused";
  });

  marquee.addEventListener("mouseleave", () => {
    marqueeTrack.style.animationPlayState = "running";
  });
}

// Placeholder booking action.
const bookingButtons = document.querySelectorAll('a[href="#book"]');

bookingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Booking section opened.");
  });
});
