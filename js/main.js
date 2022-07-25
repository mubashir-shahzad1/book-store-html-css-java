// -----------------search variables------------
let searchForm=document.querySelector(".search-form");
let searchButton=document.querySelector("#search-btn");

// -----------login variables---------
let loginForm=document.querySelector(".login-form");
let loginCloseBtn=document.querySelector("#close-login-btn");
let loginButton=document.querySelector("#login-btn");



// -------------now java-----------
// -------------search form-----------
searchButton.onclick=()=>{
    searchForm.classList.toggle("active")
}


// -------------login form-----------
loginButton.onclick=()=>{
    loginForm.classList.add("active")
}
loginCloseBtn.onclick=()=>{
    loginForm.classList.remove("active")
}
// ---------------swipper area------------
// ---------------swipper area------------
var swiper = new Swiper(".book-slider", {
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".feature-slide", {
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });