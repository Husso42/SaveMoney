document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Sélectionne les éléments
  const burgerMenu = document.getElementById("burger-menu");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  // 🔹 Ouvre/Ferme la sidebar au clic sur le burger
  burgerMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");

    // 🔹 Empêche de scroller en arrière-plan
    document.body.style.overflow = sidebar.classList.contains("show") ? "hidden" : "auto";
  });

  // 🔹 Ne rien faire si on clique dans la sidebar
  sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // 🔹 Fermer si on clique ailleurs
  document.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  // 🔹 Fermer si on clique sur l'overlay
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  // 🔹 Fermer si on appuie sur la touche Échap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });
});
