let imageLeft = document.querySelector(".exp-cont-img-first");
let imageRight = document.querySelector(".exp-cont-img-second");
let contentExp = document.querySelector(".expression-content");

imageLeft.addEventListener("click", () => changeContent("translate(0%)"));
imageRight.addEventListener("click", () => changeContent("translate(-50%)"));

function changeContent(scale) {
    imageRight.classList.toggle("op-img");
    imageLeft.classList.toggle("op-img");
    contentExp.style.transform = scale;

}