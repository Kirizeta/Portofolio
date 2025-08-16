function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".Porto-icon");
  const expanded = icon.getAttribute("aria-expanded") === "true";
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", (!expanded).toString());
}

  function openGmailCompose() {
    const to = "muslimarif2@gmail.com";
    const subject = encodeURIComponent("Halo Arif");
    const body = encodeURIComponent("Halo, saya ingin bertanya...");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    // buka tab baru
    window.open(url, "_blank");
  }
