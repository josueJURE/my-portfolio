document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const container = document.querySelector(".container");
  const textarea = document.querySelector("textarea");
  const inputs = Array.from(document.querySelectorAll(".input-group"));
  // const inputs = document.querySelectorAll(".input-group");
  const contactBtn = document.querySelector(".contact-btn");
  const form = document.querySelector("form");

  console.log(contactBtn);

  console.log(textarea);

  menuIcon.addEventListener("click", () => {
    container.classList.toggle("change");
    console.log("clicked");
  });

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Your message has been sent to Josue Jure");
  });

})



//   document.addEventListener("DOMContentLoaded", () => {
//     const menuIcon = document.querySelector(".menu-icon");
//     const contactBtn = document.querySelector(".contact-btn");

//     if (menuIcon) {
//         menuIcon.addEventListener("click", () => {
//             console.log("clicked");
//         });
//     }

//     if (contactBtn) {
//         contactBtn.addEventListener("click", (event) => {
//             event.preventDefault();
//             alert("Your message has been sent to Josue Jure");
//         });
//     }
// });



