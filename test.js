const form = document.querySelector("#search");
const titulos = document.querySelectorAll("#movies h3");
console.log(titulos);

form.addEventListener("keypress", (e) => {
  //   const dado = e.target.value.replace(/\s/g, "");
  if (e.keyCode === 13) {
    const dado = e.target.value;
    console.log(dado);

    const apiHome = fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=pt-BR&query=(" +
        dado +
        ")"
    );
    apiHome
      .then((response) => response.json)
      .then((data) => {
        for (let i = 0; i < titulos.length; i++) {
          console.log(
            (titulos[i].textContent = data.results[i].original_title)
          );
        }
      });
  }
});
