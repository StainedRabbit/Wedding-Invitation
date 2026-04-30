document.addEventListener('DOMContentLoaded', () => {
  const targetDate = new Date("2026-06-12T15:00:00").getTime(); // change this

  function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    if (gap <= 0) return;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((gap / (1000 * 60)) % 60);
    const seconds = Math.floor((gap / 1000) % 60);

    document.getElementById("days").textContent = days + "  :";
    document.getElementById("hours").textContent = hours + "  :";
    document.getElementById("minutes").textContent = minutes + "  :";
    document.getElementById("seconds").textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});