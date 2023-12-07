export function toggleMenu() {
  const menu = document.querySelector(".mobile-links");
  const icon = document.querySelector(".mobile-icon");

  // Add or remove the open class
  menu?.classList.toggle("open");
  icon?.classList.toggle("open");
}
