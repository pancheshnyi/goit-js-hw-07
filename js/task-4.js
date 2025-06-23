const loginForm = document.querySelector(".login-form");
const submitBtn = loginForm.querySelector(".button");
const defaultText = submitBtn.textContent;

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    submitBtn.textContent = "Destroy";
    submitBtn.classList.add("error");

    return;
  }

  submitBtn.textContent = defaultText;
  submitBtn.classList.remove("error");

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
}
