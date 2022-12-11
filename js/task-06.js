const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", onBlur);
function onBlur(e) {
  const input6 = e.currentTarget;
  const inputLength = Number(input6.dataset.length);
  if (input6.value.length === inputLength) {
    input6.classList.remove("invalid");
    input6.classList.add("valid");
  } else {
    input6.classList.remove("valid");
    input6.classList.add("invalid");
  }
}
