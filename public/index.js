
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const container = document.querySelector(".container");
  const year = document.querySelector(".year");
  const currentYear = new Date().getFullYear();

  year.innerHTML = `&copy; Josué<span>JURE</span> All Rights Reserved. ${currentYear} `

  menuIcon.addEventListener("click", () => {
    container.classList.toggle("change");
    console.log("clicked");
  });





