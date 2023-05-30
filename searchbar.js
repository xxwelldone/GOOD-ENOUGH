// Function to fetch data from the API
async function fetchData(searchTerm) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d4f3a21a5ab99ecd653b548b11bcc686&language=usa-EN&query=${searchTerm}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to handle search button click
function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  searchTerm = searchInput.value.trim();
  if (searchTerm !== "") {
    fetchData(searchTerm).then((data) => {
      // Process the fetched data and display the results
      displayResults(data);
      console.log(data);
    });
  }
}

// Function to display search results
const results = document.querySelector("#results");
function displayResults(data) {
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = ""; // Clear previous results

  if (data.results.length > 0) {
    data.results.slice(0, 10).forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");

      const title = document.createElement("h3");
      title.textContent = result.title;

      const poster = document.createElement("img");
      poster.src = "https://image.tmdb.org/t/p/w500" + result.poster_path;
      poster.alt = result.title;

      const rate = document.createElement("p");
      rate.className = "score";

      const thumb = document.createElement("span");
      thumb.style.fontSize = "24px";
      thumb.className = "thumb fa";
      thumb.innerHTML = "&#xf087;";

      if (result.vote_average > 6) {
        rate.textContent = result.vote_average;
        rate.style.color = "var(--cor-p1)";
        thumb.style.color = "var(--cor-p1)";
        thumb.style.rotate = "0deg";
      } else {
        rate.textContent = result.vote_average;
        rate.style.color = "var(--cor-p3)";
        thumb.style.color = "var(--cor-p3)";
        thumb.style.rotate = "180deg";
      }
      const paragraph = document.createElement("p");
      paragraph.innerText = result.overview;
      paragraph.className = "paragraph";

      const division = document.createElement("hr");
      /*AppendChild will add a new child to the div created above */
      resultItem.appendChild(title);
      resultItem.appendChild(poster);
      resultItem.appendChild(rate);
      resultItem.appendChild(thumb);
      resultItem.appendChild(paragraph);

      resultItem.appendChild(division);

      /*Having had all created, we append div created to the div already on html that we cleaned before */
      searchResults.appendChild(resultItem);
    });
  } else {
    results.innerText =
      "'" + searchTerm + "'" + " was not found. Try something like 'Xuxa'";
  }
}

// Attach click event listener to the search button
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", handleSearch);

/* */
let btn = document.getElementById("filmForm");

btn.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form input values
  var name = document.getElementById("name").value;
  var releaseYear = document.getElementById("releaseYear").value;
  var imageUrl = document.getElementById("imageUrl").value;

  // Create an object with the data
  var filmData = {
    name: name,
    releaseYear: releaseYear,
    imageUrl: imageUrl,
  };

  // Send the POST request to the API
  fetch("https://api-a3.vercel.app/AdicionarFilme", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filmData),
  })
    .then(function (response) {
      // Handle the response from the API
      if (response.ok) {
        btn.innerText = "Film added successfully!";
        btn.style.background = "var( --cor-p2)";
        btn.style.color = "var(--cor-0)";
        btn.classList.add = "thumb fa";

        btn.style.padding = "50px";
        console.log("Film added successfully!");
      } else {
        console.log("Failed to add film.");
      }
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
});
