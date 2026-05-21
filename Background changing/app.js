const colors = ["red", "blue", "black", "green"];
const triggerBtn = document.getElementById("change-color-btn");

let currentcolorIdx = 0;

triggerBtn.addEventListener("click", () => {
    currentcolorIdx = (currentcolorIdx + 1) % colors.length;
    const finalcolor = colors[currentcolorIdx];
    const bodyElement = document.body;

    bodyElement.style.backgroundColor = finalcolor;
});