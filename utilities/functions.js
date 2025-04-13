function emailTemplate(message, email, name) {
    return `
    <html>
      <head>
        <style>
          .preserve-line-breaks {
            white-space: pre-line
          }
          .user-img {
            width: 200px;
            height: 200px;
          }
        </style>
      </head>
      <body class="preserve-line-breaks" >
             <br />
      ${message} 
             <br />
      You can email me at ${email}. 
             <br />
      Regards 
              <br />
      ${name}
      
      </body>
    </html>
  `;
}


function confirmationMessage(htmlStyle, name) {
    return `
              <!DOCTYPE html>
              <html>
              <head>
                <title>Form Submission Response</title>
                <link href="https://fonts.googleapis.com/css2?family=Caveat&amp;family=Onest:wght@300&amp;family=Open+Sans:ital,wght@1,300&amp;family=Quicksand:wght@300;400;500;600;700&amp;family=Roboto:wght@300&amp;family=Rowdies&amp;display=swap" rel="stylesheet">
                <style>
                ${htmlStyle}
                </style>
      
                <script>
                  function redirectToHomePage() {
                   window.location.href = "/";
                  }
                </script>
      
      
              </head>
              <body>
                <div class="container">
                  <h1> Dear ${name} your email has been sent successfully</h1>
                  <p class="success-message">Thank you for your submission!</p>
                  <button onclick="redirectToHomePage()" type="button" class="return-to-homepage">Return to homepage</button>
                  
                </div>
              </body>
              </html>
            `
}


function sendErrorMessage(htmlStyle) {
    return `<!DOCTYPE html>
              <html>
              <head>
                <title>Form Submission Response</title>
                <style>
                 ${htmlStyle}
                </style>
      
                <script>
                  function redirectToHomePage() {
                   window.location.href = "/";
                  }
                </script>
      
      
              </head>
              <body>
                <div class="container">
                  <h1> Something has gone wrong, please try again later</h1>
                  <button onclick="redirectToHomePage()" type="button" class="return-to-homepage">Return to homepage</button>
                  
                </div>
              </body>
              </html>`
}


module.exports = { emailTemplate, confirmationMessage, sendErrorMessage };