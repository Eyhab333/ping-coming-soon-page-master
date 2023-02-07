const variableName = document.getElementById("");
const anotherVariable = document.getElementById("");

variableName.addEventListener("click", () => {
  anotherVariable.classList.remove("");
  variableName.style.display = "none";
})