// validateForm.js

function validateFormData(formData) {
  const { name, email, message } = formData;

  // Validate that name is not empty
  if (!name || name.trim() === "") {
    alert("Name is required.");
    return false;
  }

  // Validate that email is not empty and follows a basic email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate that message is not empty
  if (!message || message.trim() === "") {
    alert("Message is required.");
    return false;
  }

  // If all validations pass
  return true;
}
