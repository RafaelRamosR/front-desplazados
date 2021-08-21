const btnForm = document.getElementById("btn-form");
const form = document.getElementById("form");
const ejemplo = document.getElementById("ejemplo");

btnForm.addEventListener("click", () => {
  btnForm.classList.toggle("rotate");
  form.classList.toggle("active");
});
