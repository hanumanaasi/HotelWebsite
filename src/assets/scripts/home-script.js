const btns = document.querySelector(".nav-btn");

var sliderNav = function(manual){
    btns[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{
        sliderNav(i);
    })
})