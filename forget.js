<script>
document.getElementById("resetForm").addEventListener("submit", function(e){
  e.preventDefault();

  const newPassword = document.getElementById("newPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const successMsg = document.getElementById("successMsg");

  // Hide message before validation
  successMsg.style.display = "none";

  // Validation
  if(!newPassword || !confirmPassword){
    alert("Please fill all fields");
    return;
  }

  if(newPassword !== confirmPassword){
    alert("Passwords do not match!");
    return;
  }

  // Show success message
  successMsg.style.display = "block";
  successMsg.innerText = "Password reset successfully ✅";

  // Reset form
  document.getElementById("resetForm").reset();

  // Optional: auto hide after 3 sec
  setTimeout(function(){
    successMsg.style.display = "none";
  }, 3000);
});
</script>