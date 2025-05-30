function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("All fields are required!");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }

  return true;
}
