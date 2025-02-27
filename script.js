document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Mencegah efek bawaan
      const targetId = link.getAttribute("href").substring(1); // Ambil ID target
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Atur offset biar ga ketutup navbar
          behavior: "smooth"
        });
      }
    });
  });
});