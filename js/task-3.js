const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput() {
  const name = input.value.trim();
  output.textContent = name === "" ? "Anonymous" : name;
}
