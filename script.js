const api = fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=pt-BR&page=1"
);
const conteudo = document.querySelectorAll("#movie h3");
const imagens = document.querySelectorAll("#movie .Image");
const paragraph = document.querySelectorAll(".paragraph");
console.log(imagens);
//console.log(conteudo);
api
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < conteudo.length; i++) {
      conteudo[i].innerText = data.results[i].original_title;
      imagens[i].src =
        "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

      paragraph[i].innerText = data.results[i].overview;

      /* console.log(
        "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path
      );*/
    }

    //conteudo.innerText = data.results[0].original_title;
  });
