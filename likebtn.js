const form = document.querySelector("#search");
const titulos = document.querySelectorAll("#movies h3");
const thumb1 = document.querySelector("#thumb1");
const thumb2 = document.querySelector("#thumb2");

/*API battle*/
const battletitulo = document.querySelectorAll(".battle-titulo");
const battleImage = document.querySelectorAll(".battle-image");
const score = document.querySelectorAll(".score");
const thumb = document.querySelectorAll(".thumb");

const banco = fetch("https://api-a3-cy2x701rm-rickymarq.vercel.app/Filmes");

banco
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < battletitulo.length; i++) {
      battletitulo[i].innerText = data.filmes[i].name;
      battleImage[i].src = data.filmes[i].urlImage;

      if (data.filmes[i].rate > 6) {
        score[i].innerText = data.filmes[i].rate;
        score[i].style.color = "var(--cor-p1)";
        thumb[i].style.color = "var(--cor-p1)";
        thumb[i].style.rotate = "0deg";
      } else if (data.filmes[i].rate <= 6) {
        score[i].innerText = data.filmes[i].rate;
        score[i].style.color = "var(--cor-p3)";
        thumb[i].style.color = "var(--cor-p3)";
        thumb[i].style.rotate = "180deg";
      } else {
        score[i].innerText = "Unavailable";
      }
    }
  });
/* Like and deslike */
let clicked = localStorage.getItem("clicked") === "true";
console.log(clicked);
thumb1.addEventListener("click", () => {
  if (clicked === false) {
    fetch(
      "https://api-a3-1obeusjbe-rickymarq.vercel.app/LikeMovie/646400bced96613fbcc02357",
      {
        method: "PUT",
      }
    );
    localStorage.setItem("clicked", "true");
    clicked = true;
    console.log("feito: " + clicked);
  } else {
    fetch(
      "https://api-a3-f00z0xaq4-rickymarq.vercel.app/DeslikeMovie/646400bced96613fbcc02357",
      {
        method: "PUT",
      }
    );
    localStorage.setItem("clicked", "false");
    console.log("deslike: " + clicked);

    // clicked = localStorage.getItem("clicked") = "false";
  }
});

thumb2.addEventListener("click", () => {
  if (clicked === false) {
    fetch(
      "https://api-a3-1obeusjbe-rickymarq.vercel.app/LikeMovie/646400bced96613fbcc0235a",
      {
        method: "PUT",
      }
    );
    localStorage.setItem("clicked", "true");
    clicked = true;
    console.log("feito: " + clicked);
  } else {
    fetch(
      "https://api-a3-f00z0xaq4-rickymarq.vercel.app/DeslikeMovie/646400bced96613fbcc0235a",
      {
        method: "PUT",
      }
    );
    localStorage.setItem("clicked", "false");
    console.log("deslike: " + clicked);

    // clicked = localStorage.getItem("clicked") = "false";
  }
});

/*Form to Add */

document
  .getElementById("filmForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById("name").value;
    var releaseYear = document.getElementById("releaseYear").value;

    var imageUrl = document.getElementById("imageUrl").value;

    // Create request payload
    var payload = {
      id: 0,
      name: name,
      year: releaseYear,
      urlImage: imageUrl,
    };
    console.log(payload);
    // Send POST request to the API
    fetch("https://api-a3.vercel.app/AdicionarFilme", {
      method: "POST",

      body: JSON.stringify(payload),
    })
      .then(function (response) {
        if (response.ok) {
          // Handle successful response
          console.log("Film added successfully!");
        } else {
          // Handle error response
          console.log("Failed to add film.");
        }
      })
      .catch(function (error) {
        // Handle network error
        console.log("An error occurred:", error);
      });
  });
