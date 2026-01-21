const titles = document.querySelectorAll("titles");
const button = document.getElementById("style");

function changeColor() {
    titles.style.color = "blue"

    button.addEventListener("click", changeColor);
}
