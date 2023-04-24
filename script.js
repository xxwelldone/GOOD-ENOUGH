var x = "everything everywhere all at once";
fetch(
  "http://www.omdbapi.com//?t=" +
    x +
    "&i=<string>&s=<string>&y=<integer>&type=<string>&plot=short&tomatoes=false&r=json&v=1&page=1&callback=<string>"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("api: " + error);
  });
