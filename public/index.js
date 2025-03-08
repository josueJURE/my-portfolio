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

    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });


    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network was not ok")
      }
      else {}
      return response.json()
    })
    .then(data => {
      console.log(data)
      alert("Email sent successfully");
      form.reset();
    })
    .catch(error => {
      console.error("Error", error)
      alert("Failed to send email. Please try again later.");
    })

     
    

    try {
      fetch("/")
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.error(error);
    }
  });
});


