// SEARCH FUNCTION
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

  const searchValue = this.value.toLowerCase().trim();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    // course name uthao (h3 se)
    const title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});