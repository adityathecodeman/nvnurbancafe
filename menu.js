document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-btn");
  const menus = document.querySelectorAll(".menu-content");

  menus[1].style.display = "none";

  buttons.forEach((btn, i) => {
    btn.onclick = () => {

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      menus.forEach(menu => {
        menu.style.display = "none";
        menu.style.opacity = 0;
        menu.style.transform = "scale(0.96)";
      });

      const active = menus[i];
      active.style.display = "block";
      active.style.transition = "0.25s ease-out";

      requestAnimationFrame(() => {
        active.style.opacity = 1;
        active.style.transform = "scale(1)";
      });
    };
  });
});
