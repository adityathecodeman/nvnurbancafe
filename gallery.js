document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-btn");
  const items = document.querySelectorAll(".gallery-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // tombol aktif
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      // reset semua item
      items.forEach(item => {
        item.style.display = "none";
        item.style.opacity = 0;
        item.style.transform = "translateY(20px)";
      });

      // tampilkan item sesuai kategori
      let delay = 0;
      items.forEach(item => {
        if (item.dataset.category === filter) {
          item.style.display = "block";
          item.style.transition = "0.4s ease";

          setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
          }, delay);

          delay += 100; // muncul satu-satu
        }
      });

    });
  });

  // default pertama (VIBES)
  document.querySelector(".menu-btn.active").click();
});
