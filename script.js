document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth"
        });
      }
    });
  });
});

function wordRandom() {
    const wordElement = document.getElementById('word');
    const randomWords = ['Jangan pernah berhenti menunjukkan kepada seseorang betapa mereka sangat berarti bagimu', 'Lebih baik menangis di tengah hujan sehingga tidak ada yang bisa mengerti bahwa kamu bahagia atau kesakitan', 'Jelajahi hal-hal baru dan belajar darinya karena hidup ini terlalu singkat', 'Hidup adalah perjalanan panjang di mana kamu akan menemukan ribuan keajaiban, perhatikan mereka'];
    const randomizer = randomWords[Math.floor(Math.random() * randomWords.length)];
    
    wordElement.style.opacity = 0;
    setTimeout(() => {
        wordElement.textContent = randomizer;
        wordElement.style.opacity = 1;
    }, 200);
}