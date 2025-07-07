function checkPassword() {
  const input = document.getElementById("password").value.trim();
  const correct = "1123581321"; // first 10 Fibonacci digits
  const message = document.getElementById("message");

  if (input === correct) {
    message.textContent = "✅ Correct! Proceed to the next step...";
    message.style.color = "#00ff88";
    // Optionally redirect:
    // window.location.href = "/nextclue.html";
  } else {
    message.textContent = "❌ Incorrect. Try again.";
    message.style.color = "#ff4444";
  }
}
