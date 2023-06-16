const api = fetch(
  "https://api-a3-1obeusjbe-rickymarq.vercel.app/Filmes"
);
const conteudo = document.querySelectorAll("#movies h3");
const imagens = document.querySelectorAll("#movies .Image");
const paragraph = document.querySelectorAll(".paragraph");

const filmesHome = document.querySelectorAll("#movieIndex h3");
const imagensHome = document.querySelectorAll("#movieIndex .Image");
const score = document.querySelectorAll(".score");
const thumb = document.querySelectorAll(".thumb");

/* API for Film List */
api
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < conteudo.length; i++) {
      conteudo[i].innerText = data.filmes[i].name;
      imagens[i].src = data.filmes[i].urlImage;
      
      if (data.filmes[i].rate > 6) {
        score[i].innerText = data.filmes[i].rate;
        score[i].style.color = "var(--cor-p1)";
        thumb[i].style.color = "var(--cor-p1)";
        thumb[i].style.transform = "rotate(0deg)";
      } else if (data.filmes[i].rate <= 6) {
        score[i].innerText = data.filmes[i].rate;
        score[i].style.color = "var(--cor-p3)";
        thumb[i].style.color = "var(--cor-p3)";
        thumb[i].style.transform = "rotate(180deg)";
      } else {
        score[i].innerText = "0";
        score[i].style.color = "var(--cor-p3)";
        thumb[i].style.color = "var(--cor-p3)";
        thumb[i].style.transform = "rotate(180deg)";
      }

    //  paragraph[i].innerText = data.filmes[i].overview;
    }
  });

/*Get API Poster, title and Score/change color for home page */
const apiHome = fetch(
  "https://api.themoviedb.org/3/search/movie?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=usa-EN&query=(xuxa)"
);
//api.themoviedb.org/3/movie/popular?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=en-US&page=

//https: "https://api.themoviedb.org/3/search/movie?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=pt-BR&query=(xuxa)";

apiHome
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < filmesHome.length; i++) {
      filmesHome[i].innerText = data.results[i].original_title;
      imagensHome[i].src =
        "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
      if (data.results[i].vote_average > 6.0) {
        score[i].innerText = data.results[i].vote_average;
        score[i].style.color = "var(--cor-p1)";
        thumb[i].style.color = "var(--cor-p1)";
        thumb[i].style.rotate = "0deg";
      } else if (data.results[i].vote_average <= 6.0) {
        score[i].innerText = data.results[i].vote_average;
        score[i].style.color = "var(--cor-p3)";
        thumb[i].style.color = "var(--cor-p3)";
        thumb[i].style.rotate = "180deg";
      } else {
        score[i].innerText = "Unavailable";
      }
    }
  });
