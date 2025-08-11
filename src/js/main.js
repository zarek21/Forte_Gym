// --- LÓGICA DE LA NAVEGACIÓN MÓVIL ---

const headerElement = document.querySelector(".header");
const mobileNavButton = document.querySelector(".header-mobile-btn");

mobileNavButton.addEventListener("click", function () {
  // 1. Añade/quita la clase que muestra/oculta el menú
  headerElement.classList.toggle("header--nav-open");
  const isNavOpen = headerElement.classList.contains("header--nav-open");

  // 2. Actualiza el atributo ARIA para accesibilidad
  mobileNavButton.setAttribute("aria-expanded", isNavOpen);
});
