const mobile = document.querySelector(".mobile-nav");
const ham = document.querySelector(".ham")

ham.addEventListener("click", (e)=>{
    mobile.classList.toggle("show")
})

