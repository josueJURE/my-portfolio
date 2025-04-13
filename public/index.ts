
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon")  as HTMLElement;
  const container = document.querySelector(".container")  as HTMLElement;
  const year = document.querySelector(".year")  as HTMLElement;
  const currentYear: number = new Date().getFullYear();

  year.innerHTML = `&copy; Josué<span>JURE</span> All Rights Reserved. ${currentYear} `

  menuIcon.addEventListener("click", () => {
    container.classList.toggle("change");
    console.log("clicked");
  });


})

