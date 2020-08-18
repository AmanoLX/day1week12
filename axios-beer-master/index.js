const getBeerInfo = (beerName) => {
  axios
    .get(`https://api.punkapi.com/v2/beers`, {
      params: { beer_name: beerName },
    })
    .then((response) => {
      response.data.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `<img  src="${item.image_url}"
        <p> ${item.name} </p>`;
        document.getElementById("beers-list").appendChild(li);
      });
    })
    .catch((err) => {
      console.log(err);
      err.response.status === 404
        ? alert(`The beer ${beerName} doesn't exist.`)
        : alert("Server error! Sorry.");
    });
};

document.getElementById("get-beer-btn").addEventListener("click", () => {
  const userInput = document.getElementById("beer-name-input").value;
  getBeerInfo(userInput);
});
