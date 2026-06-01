// Apply Filter Function
function applyFilter() {

  const searchInput = document.getElementById("search");
  const profile = document.getElementById("profile").value.toLowerCase();
  const location = document.getElementById("location").value.toLowerCase();
  const experience = document.getElementById("experience").value;
  const wfh = document.getElementById("wfh").checked;

  const cards = document.querySelectorAll(".card");

  // Agar search input nahi mila
  if (!searchInput) {
    console.error("Search input not found (id='search' add karo)");
    return;
  }

  const searchValue = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {

    const text = card.textContent.toLowerCase();

    const cardProfile = (card.getAttribute("data-profile") || "").toLowerCase();
    const cardLocation = (card.getAttribute("data-location") || "").toLowerCase();
    const cardExp = card.getAttribute("data-exp") || "";
    const cardWFH = card.getAttribute("data-wfh") === "true";

    // Conditions
    const matchSearch = searchValue === "" || text.includes(searchValue);
    const matchProfile = profile === "" || cardProfile.includes(profile);
    const matchLocation = location === "" || cardLocation.includes(location);
    const matchExp = experience === "" || cardExp === experience;
    const matchWFH = !wfh || cardWFH === true;

    // Final check
    if (matchSearch && matchProfile && matchLocation && matchExp && matchWFH) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });
}