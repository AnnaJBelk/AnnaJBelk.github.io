// resetForm.js

function resetForm() {
  const form = document.getElementById("contactForm");
  form.reset(); // Reset to initial state
  form.querySelectorAll("input").forEach((input) => (input.value = "")); // Clear all fields completely
}
