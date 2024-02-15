import "../style.css";

const email = document.querySelector("input[name='email']");
const emailError = document.querySelector(".email-error");
email.addEventListener("input", () => {
  if (email.validity.valueMissing) {
    emailError.textContent = "Email can't be empty";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email";
  } else {
    emailError.textContent = "";
  }
});

const country = document.querySelector("input[name='country']");
const countryError = document.querySelector(".country-error");
country.addEventListener("input", () => {
  const countryRegexExp = /^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$/;
  if (country.validity.valueMissing) {
    countryError.textContent = "Country can't be empty";
  } else if (!countryRegexExp.test(country.value)) {
    countryError.textContent = "Please enter a valid country";
  } else {
    countryError.textContent = "";
  }
});

const zipCode = document.querySelector("input[name='zipCode']");
const zipCodeError = document.querySelector(".zipcode-error");
zipCode.addEventListener("input", () => {
  const zipCodeRegex = /^\d{4}$/;

  if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = "Zip code can't be empty";
  } else if (!zipCodeRegex.test(zipCode.value)) {
    zipCodeError.textContent = "Please enter a valid zip code";
  } else {
    zipCodeError.textContent = "";
  }
});

const password = document.querySelector("input[name='password']");
const passwordError = document.querySelector(".password-error");
const confirmPassword = document.querySelector("input[name='confirmPassword']");
const confirmPasswordError = document.querySelector(".confirm-password-error");

password.addEventListener("input", () => {
  const symbolsRegex = /[!@#$%^&*() ]/;

  if (password.validity.valueMissing) {
    passwordError.textContent = "Password can't be empty";
  } else if (password.validity.tooShort) {
    passwordError.textContent = "Password must be at least 5 characters long";
  } else if (password.validity.tooLong) {
    passwordError.textContent =
      "Password cannot be longer than 20 characters long";
  } else if (symbolsRegex.test(password.value)) {
    passwordError.textContent = "Password cannot contain spaces or symbols";
  } else {
    passwordError.textContent = "";
  }
});

confirmPassword.addEventListener("input", () => {
  if (password.validity.valueMissing) {
    confirmPasswordError.textContent = "Password can't be empty";
  } else if (password.value === confirmPassword.value) {
    confirmPasswordError.textContent = "";
    passwordError.textContent = "";
  } else {
    confirmPasswordError.textContent = "Passwords do not match";
    passwordError.textContent = "Passwords do not match";
  }
});

const submit = document.querySelector("button");
submit.addEventListener("click", () => {
  const isFormValid = document.querySelector("form").checkValidity();
  if (isFormValid) {
    alert("Your form is valid, HIGH FIVE!!!");
  }
});
