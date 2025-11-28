const input = document.querySelector("input");
const form = document.querySelector("form");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorIcon = document.querySelector(".error-icon");
const errorText = document.querySelector(".error-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = input.value.trim();
  errorIcon.classList.add("hidden");
  errorText.classList.add("hidden");

  input.classList.remove("border-2");
  input.classList.remove("border-[var(--red-500)]");

  if (email === "") {
    showError("Email cannot be empty");
  } else if (!emailPattern.test(email)) {
    showError("Please provide a valid email");
  }
});

function showError(message) {
  errorText.textContent = message;
  errorIcon.classList.remove("hidden");
  errorText.classList.remove("hidden");
  input.classList.add("border-2");
  input.classList.add("border-[var(--red-500)]");
}
