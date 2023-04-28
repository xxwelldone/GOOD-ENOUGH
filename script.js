const api = fetch(
  "https://api.themoviedb.org/3/movie/upcoming?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=pt-BR&page=1"
);
const conteudo = document.querySelectorAll("#movies h3");
const imagens = document.querySelectorAll("#movies .Image");
const paragraph = document.querySelectorAll(".paragraph");

const filmesHome = document.querySelectorAll("#movieIndex h3");
const imagensHome = document.querySelectorAll("#movieIndex .Image");
const score = document.querySelectorAll(".score");

api
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < conteudo.length; i++) {
      conteudo[i].innerText = data.results[i].original_title;
      imagens[i].src =
        "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

      paragraph[i].innerText = data.results[i].overview;
    }
    // for (let i = 0; i < filmesHome.length; i++) {
    //   filmesHome[i].innerText = data.results[i].original_title;
    //   imagensHome[i].src =
    //     "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
    // }
  });

const apiHome = fetch(
  "https://api.themoviedb.org/3/search/movie?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=pt-BR&query=(xuxa)"
);

apiHome
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < filmesHome.length; i++) {
      filmesHome[i].innerText = data.results[i].original_title;
      imagensHome[i].src =
        "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
      if (data.results[i].vote_average > 6) {
        score[i].innerText = data.results[i].vote_average;
        score[i].style.color = "#0ed308";
      } else if (data.results[i].vote_average <= 6) {
        score[i].innerText = data.results[i].vote_average;
        score[i].style.color = "#e705dc";
      } else {
        score[i].innerText = "Unavailable";
      }
    }
  });

// const barra = document.querySelector(".input");
// barra.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     var search = document.querySelectorAll(".search").values;

//     console.log(search.trim());
//   }
// });

// console.log(search);

// const pesquisa = fetch(
//   "https://api.themoviedb.org/3/search/movie?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=pt-BR&query=(" +
//     search +
//     ")"
// );
// pesquisa
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
