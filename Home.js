// function for menuDrop
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
// functions Evaluate website
let star1 = document.querySelector(".evaluation .evaluate #star1");
let star2 = document.querySelector(".evaluation .evaluate #star2");
let star3 = document.querySelector(".evaluation .evaluate #star3");
let star4 = document.querySelector(".evaluation .evaluate #star4");
let star5 = document.querySelector(".evaluation .evaluate #star5");
star1.addEventListener("click", function (){
    star1.style.display = "none";
    document.querySelector(".evaluation .evaluate #Full1").style.display = "block";
});
star2.addEventListener("click",function (){
    star1.style.display = "none";
    star2.style.display = "none";
    document.querySelector(".evaluation .evaluate #Full1").style.display = "block";
    document.querySelector(".evaluation .evaluate #Full2").style.display = "block";
})
star3.addEventListener("click",function (){
    star1.style.display = "none";
    star2.style.display = "none";
    star3.style.display = "none";
    document.querySelector(".evaluation .evaluate #Full1").style.display = "block";
    document.querySelector(".evaluation .evaluate #Full2").style.display = "block";
    document.querySelector(".evaluation .evaluate #Full3").style.display = "block";
})
star4.addEventListener("click",function (){
    star1.style.display = "none";
    star2.style.display = "none";
    star3.style.display = "none";
    star4.style.display = "none";
    document.querySelector(".evaluation .evaluate #Full1").style.display = "block";
    document.querySelector(".evaluation .evaluate #Full2").style.display = "block";
    document.querySelector(".evaluation .evaluate #Full3").style.display = "block";
    document.querySelector(".evaluation .evaluate #Full4").style.display = "block";
})
star5.addEventListener("click",function (){
    star1.style.display = "none";
    star2.style.display = "none";
    star3.style.display = "none";
    star4.style.display = "none";
    star5.style.display = "none";
    document.querySelector(".evaluation .evaluate #Full1").style.display = "block";
    document.querySelector(".evaluation .evaluate #Full2").style.display = "block";
    document.querySelector(".evaluation .evaluate #Full3").style.display = "block";
    document.querySelector(".evaluation .evaluate #Full4").style.display = "block";
    document.querySelector(".evaluation .evaluate #Full5").style.display = "block";
})