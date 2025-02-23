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

// textarea.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });


// const user_inputs = [...inputs];

// user_inputs.forEach(function(element) {
//     element.addEventListener("input", (event) => {
//         emailObject = {
//             name: form.querySelector('input[name="name"]').value,
//             email: form.querySelector('input[name="email"]').value,
//             subject: form.querySelector('input[name="subject"]').value,
//             message: form.querySelector('textarea[name="message"]').value
//         };
//         console.log(event.target.value)
       
//     });
   
// });

contactBtn.addEventListener("click", () => {
 
    console.log("done")
})


