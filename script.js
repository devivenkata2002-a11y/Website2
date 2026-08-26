const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseContent = document.getElementById("surpriseContent");

surpriseBtn.addEventListener("click", function () {

    surpriseContent.classList.add("show");

    surpriseContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    surpriseBtn.style.display = "none";

});