function hamburg(){
    const navbar = document.querySelector(".dropdown")
navbar.style.transform = "translateY(0px)"

}

function cancel(){
    const navbar = document.querySelector(".dropdown")
navbar.style.transform = "translateY(-500px)"

}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


