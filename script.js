function checkPassword() {
  const input = document.getElementById("password").value.trim();
  const correct = "1123581321";
  const message = document.getElementById("message");

  if (input === correct) {
    message.textContent = "✅ Correct! Get ready for the next puzzle...";
    message.style.color = "#00ff88";

    // Hide step 1, show step 2
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
  } else {
    message.textContent = "❌ Incorrect. Try again.";
    message.style.color = "#ff4444";
  }
}
