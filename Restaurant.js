let menuSign_open = document.getElementById("openMenu");
let menuSign_close = document.getElementById("closeMenu");
let menuDrop = document.querySelector(".menudrop");
menuSign_open.onclick = function () {
    menuDrop.style.display = "block";
    menuSign_open.style.display = "none";
    menuSign_close.style.display = "block";
}
menuSign_close.onclick = function () {
    menuDrop.style.display = "none";
    menuSign_open.style.display = "block";
    menuSign_close.style.display = "none";
}
function showDescription(id) {
    var desc = document.getElementById(id);
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}