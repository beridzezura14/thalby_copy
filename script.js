
const burger = document.querySelector(".burger");
const closeBurger = document.querySelector(".close-burger");
const menu = document.querySelector("nav ul")


burger.addEventListener("click", function(){
    burger.style.display = "none"
    closeBurger.style.display = "block"
    menu.style.display = "flex"
})
closeBurger.addEventListener("click", function(){
    burger.style.display = "block"
    closeBurger.style.display = "none"
    menu.style.display = "none"
})
