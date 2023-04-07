// -----------------  selected elements ---------------------
const searchForm = document.querySelector('.form-search')
const searchBtn = document.querySelector('#search-btn')



// ---------------search-btn script -----------------------------------------------
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active')
    // console.log("clicked")
}) 

// ----------------------  login-form script ----------------------------------
const loginForm = document.querySelector('.login-form-container')
const loginBtn = document.querySelector('#login-btn')
const closeBtn = document.querySelector('#close-login-btn')
loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active')
})

closeBtn.addEventListener("click", () => {
    loginForm.classList.remove('active')
})





//  -----------------   swiper class script ------------------------

var swiper = new Swiper(".row-book", {
    loop : true,

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




// listed book sider

var swiper = new Swiper(".listed-book-slider", {
    loop : true,

    autoplay: {
        delay : 5000,
        disableOnInteraction : false,
    },

        breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,

},
        },
});





//  review  sider

var swiper = new Swiper(".reviews-slider", {
    spaceBetween : 15,
    cursorGrab : true,
    loop : true,
    autoplay: {
        delay : 6000,
        disableOnInteraction : false,
    },

        breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,

},
        },
});






// --------------------------------  window scrolling script -----------------------
window.onscroll = () =>{

    searchForm.classList.toggle('active')

    if(window.scrollY > 80){
        document.querySelector(".header .header-link").classList.add('active')
    }else{
        document.querySelector(".header .header-link").classList.remove('active')
    }
}


window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector(".header .header-link").classList.add('active')
    }else{
        document.querySelector(".header .header-link").classList.remove('active')
    }
}