var x = "everything everywhere all at once";
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=pt-BR&page=1"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data; i++) {
      console.log(i.poster_path);
    }
  })
  .catch((error) => {
    console.log("api: " + error);
  });
