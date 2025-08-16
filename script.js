function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".Porto-icon");
  const expanded = icon.getAttribute("aria-expanded") === "true";
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", (!expanded).toString());
}
