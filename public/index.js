const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");
const textarea = document.querySelector("textarea");
const inputs = Array.from(document.querySelectorAll(".input-group"));
// const inputs = document.querySelectorAll(".input-group");
const contactBtn = document.querySelector(".contact-btn")
const form = document.querySelector("form")

let emailObject;



console.log(textarea);

menuIcon.addEventListener("click", () => {
  container.classList.toggle("change");
  console.log("clicked");
});


contactBtn.addEventListener("click", () => {
 
    console.log("done")
})


