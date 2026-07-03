function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

// Close menu when a link is clicked
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
  });
});