function goBack(){
  window.history.back(); // WORKING BACK BUTTON
}

function applyJob(){
  document.getElementById("popup").style.display = "flex";
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "jobs.html";
  }
}