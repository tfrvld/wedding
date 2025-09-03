const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const navBurger = document.querySelector(".navburger");

burger.addEventListener("click", () => {
  if (navBurger.classList.contains("hidden")) {
    // Show menu with slide down animation
    navBurger.classList.remove("hidden");
    navBurger.classList.remove("animate-slide-up");
    navBurger.classList.add("animate-slide-down");
  }
});

close.addEventListener("click", () => {
  // Hide menu with slide up animation
  navBurger.classList.remove("animate-slide-down");
  navBurger.classList.add("animate-slide-up");

  // Hide after animation completes
  setTimeout(() => {
    navBurger.classList.add("hidden");
  }, 300); // Match with animation duration
});

document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk smooth scroll
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  // Menambahkan event listener untuk navigasi desktop
  const desktopNavLinks = document.querySelectorAll("nav a");
  desktopNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        scrollToSection(href.substring(1));
      }
    });
  });

  // Menambahkan event listener untuk navigasi mobile
  const mobileNavLinks = document.querySelectorAll(".navburger a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        scrollToSection(href.substring(1));
      }

      // Tutup navbar mobile setelah mengklik link
      document.querySelector(".navburger").classList.add("hidden");
    });
  });

  // Menambahkan event listener untuk tombol details dan venue details di hero section
  const heroButtons = document.querySelectorAll(".hero a");
  heroButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        scrollToSection(href.substring(1));
      }
    });
  });
});

const targetDate = new Date();
targetDate.setMonth(8);
targetDate.setDate(14);
targetDate.setHours(10);
targetDate.setMinutes(0);
targetDate.setSeconds(0);
targetDate.setMilliseconds(0);

if (Date.now() > targetDate.getTime()) {
  targetDate.setFullYear(targetDate.getFullYear() + 1);
}

function updateCountdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  const timer = document.querySelectorAll(".timer");

  timer.forEach(
    (t) =>
      (t.innerHTML = `${days} Hari, ${formattedHours} Jam, ${formattedMinutes} Menit, ${formattedSeconds} Detik`)
  );
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
