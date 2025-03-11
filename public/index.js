
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const container = document.querySelector(".container");
  const form = document.querySelector("form");

  menuIcon.addEventListener("click", () => {
    container.classList.toggle("change");
    console.log("clicked");
  });

});

// This code below uses a different approach and is kept for future reference
// document.addEventListener("DOMContentLoaded", () => {
//   const menuIcon = document.querySelector(".menu-icon");
//   const container = document.querySelector(".container");
//   const textarea = document.querySelector("textarea");
//   // const inputs = Array.from(document.querySelectorAll(".input-group"));

//   const inputs = document.querySelectorAll("input");
//   const contactBtn = document.querySelector(".contact-btn");
//   const form = document.querySelector("form");

//   menuIcon.addEventListener("click", () => {
//     container.classList.toggle("change");
//     console.log("clicked");
//   });

//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     // const formData = new FormData(form);
//     const formData = new FormData(e.target);

//     try {
//       const response = await fetch("http://localhost:3000/", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         alert("Your message has been sent to Josue Jure");
//         e.target.reset()
      
//       } else {
//         alert("we failed to send your email. Please try again");
//       }
//     } catch (error) {
//       console.log("Error", error);
//       alert("An error occureed");
//     } 
//   });
// });







