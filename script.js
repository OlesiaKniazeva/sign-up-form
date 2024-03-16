const form = document.querySelector("#sign-up-form");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const button = document.querySelector("button");
const passwordError = document.querySelector("#password-error");

button.addEventListener("click", (event) => {
  event.preventDefault();

  passwordInput.classList.remove("error");
  confirmPasswordInput.classList.remove("error");

  if (passwordInput.value === "") {
    passwordInput.classList.add("error");
    passwordError.textContent = "You should fill the password!";
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.classList.add("error");
    passwordInput.classList.add("error");
    passwordError.textContent = "* Passwords do not match";
  } else {
    passwordError.textContent = "";
    form.submit();
  }
});
