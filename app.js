//Getting the request from the API
const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const response = await axios.get(
    `http://api.tvmaze.com/search/shows?`,
    config
  );
  displayImages(response.data);
  form.elements.query.value = "";
});

//Displaying images
const displayImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

//Refreshing Results
const refreshBtn = document.querySelector("#refresh");
refreshBtn.addEventListener("click", function () {
  window.location.reload();
});
