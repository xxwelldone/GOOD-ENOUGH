const form = document.querySelector("#search");
const titulos = document.querySelectorAll("#movies h3");
console.log(titulos);
const thumb = document.querySelector(".thumb");
console.log(thumb);
const banco = fetch("https://api-a3-cy2x701rm-rickymarq.vercel.app/Filmes");

thumb.addEventListener("click", () => {
  fetch(
    "https://api-a3-1obeusjbe-rickymarq.vercel.app/LikeMovie/646400bced96613fbcc02357",
    {
      method: "PUT",
    }
  );
  console.log("feito");
});

banco
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 10; i++) {
      console.log(data.filmes[i].name);
    }
  });

// form.addEventListener("keypress", (e) => {
//   //   const dado = e.target.value.replace(/\s/g, "");
//   if (e.keyCode === 13) {
//     const dado = e.target.value;
//     console.log("test" + dado);

//     const apiHome = fetch(
//       "https://api.themoviedb.org/3/search/movie?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=pt-BR&query=(" +
//         dado +
//         ")"
//     );
//     apiHome
//       .then((response) => response.json)
//       .then((data) => {
//         for (let i = 0; i < titulos.length; i++) {
//           console.log(
//             (titulos[i].textContent = data.results[i].original_title)
//           );
//         }
//       });
//   }
// });
