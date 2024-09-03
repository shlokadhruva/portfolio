document.addEventListener("DOMContentLoaded", function() {
  const heroTitle = document.querySelector(".hero-title");
  const profileImg = document.querySelector(".profile-img");
  const timelineItems = document.querySelectorAll(".timeline-item");

  document.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      heroTitle.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      profileImg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.05)`;
  });

  document.addEventListener("mouseleave", () => {
      heroTitle.style.transform = `rotateY(0deg) rotateX(0deg)`;
      profileImg.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
  });

  const handleScroll = () => {
      timelineItems.forEach(item => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
              item.classList.add("visible");
          }
      });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check on load

  // Navigation Scroll Effect
  const navLinks = document.querySelectorAll("#nav-links a");

  navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth"
          });
      });
  });
});
