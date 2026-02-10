const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const statusText = document.getElementById("status");

searchBtn.addEventListener("click", searchMovies);

async function searchMovies() {
  const query = searchInput.value.trim();

  if (query === "") {
    statusText.textContent = "❌ Please enter a movie name";
    return;
  }

  resultsDiv.innerHTML = "";
  statusText.textContent = "⏳ Loading...";

  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );

    if (!response.ok) {
      throw new Error("API failed");
    }

    const data = await response.json();

    if (data.length === 0) {
      statusText.textContent = "No results found 😕";
      return;
    }

    statusText.textContent = "";

    data.forEach(item => {
      const show = item.show;

      const card = document.createElement("div");
      card.className = "card";

      const imageSrc = show.image
        ? show.image.medium
        : "https://via.placeholder.com/210x295?text=No+Image";

      card.innerHTML = `
        <img src="${imageSrc}" alt="${show.name}">
        <h3>${show.name}</h3>
        <p>${show.genres.join(", ") || "Genre not available"}</p>
      `;

      resultsDiv.appendChild(card);
    });

  } catch (error) {
    statusText.textContent = "⚠️ Something went wrong. Try again later.";
  }
}
