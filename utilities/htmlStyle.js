const htmlStyle = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: "Caveat", cursive;
    font-family: "Onest", sans-serif;
    font-family: "Open Sans", sans-serif;
    font-family: "Quicksand", sans-serif;
    font-family: "Roboto", sans-serif;
    font-family: "Rowdies", cursive;
  }

    html, body {
    height: 100%;
    font-size: 62.5%; /* 1rem equals 10px */
    background: linear-gradient(#232932, #2c3138, #232932);
  }

   body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
  }
      .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center
    
        width: 800px;
        height: 500px;
        margin: 0 auto;
        background-color: #1d222a;
        padding: 20px;
        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      h1, .success-message  {
        font-size: 5rem;
        width: 60rem;
        margin: 4rem 0 2rem 0;
        color: #29a587;
        text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
        text-align: center;
        
      }
     
      .user-data {
        margin-top: 20px;
        padding: 15px;
        background: #f9f9f9;
        // border-left: 4px solid #4CAF50;
      }

    .return-to-homepage {
      width: calc(100% - 3rem);
      height: 5rem;
      background-color: rgb(41, 165, 135);
      color: rgb(255, 255, 255);
      text-transform: uppercase;
      font-size: 1.6rem;
      font-weight: 300;
      font-family: "Rowdies", cursive;
      letter-spacing: 0.2rem;
      cursor: pointer;
      border-width: 0.2rem;
      border-style: solid;
      border-color: rgb(187, 187, 187);
      border-image: initial;
      border-radius: 3rem;

    }`;

    module.exports = htmlStyle;