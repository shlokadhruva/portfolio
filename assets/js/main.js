document.addEventListener("mousemove", function (e) {
  const cursor = document.getElementById("cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-links a");

document.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
          currentSection = section.getAttribute("id");
      }
  });

  navLinks.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href").includes(currentSection)) {
          a.classList.add("active");
      }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('appear');
          }
      });
  }, {
      threshold: 0.3,
  });

  timelineItems.forEach(item => {
      observer.observe(item);
  });
});

window.onload = function () {
  const heroTitle = document.querySelector('.hero-title');
  heroTitle.classList.add('animate-title');
};
