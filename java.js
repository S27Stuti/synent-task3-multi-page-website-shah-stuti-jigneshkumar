function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "jobs.html";
  }
}

function applyJob() {
  alert("✅ Application Submitted Successfully!");
}