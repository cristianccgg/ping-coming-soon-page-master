let inputEmail = document.getElementById("email");
let button = document.getElementById("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  validateEmail(inputEmail.value);
});

function validateEmail(email) {
  let regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (regex.test(email) === true) {
    inputEmail.style.border = "1px solid hsl(223, 87%, 63%)";
    error.style.display = "none";
    inputEmail.value = "";
  } else {
    inputEmail.style.border = "1px solid red";
    error.style.display = "block";
  }
}
