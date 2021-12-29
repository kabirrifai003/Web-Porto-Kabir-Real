// Animasi skill

listSkill = document.querySelectorAll(".skill li")

listSkill.forEach(el => {
    el.addEventListener("mouseover", function(){
        span = el.querySelector(".bungkus span")
        span.style.width = `${span.parentElement.nextElementSibling.innerHTML}`
    })
});

listSkill.forEach(el => {
    el.addEventListener("mouseout", function(){
        span = el.querySelector(".bungkus span")
        span.style.width = "0"
    })
});

// Responsive

if(window.screen.availWidth<=576){
    x = document.querySelector(".intro div div.text")
    x.classList.remove("col-6")
    x = document.querySelector(".intro div div.gambar")
    x.classList.remove("col-6")
}