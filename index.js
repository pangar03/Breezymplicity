// Skills

const skills = document.querySelector(".skills-section");
const spans = document.querySelectorAll(".inner-skills span");

window.onscroll = function(){
    if(window.scrollY >= skills.offsetTop - 300){
        spans.forEach((span) => {
            span.style.width = span.dataset.value;
        })
    }
}

// Modal window

const openModal = document.querySelector(".popup-contact");
const modal = document.querySelector(".box-inner");
const closeModal = document.querySelector(".bg-contact");

openModal.addEventListener("click", function() {
    modal.classList.add("open-modal");
})

closeModal.addEventListener("click", function() {
    modal.classList.remove("open-modal");
})

// Footer

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

// NavBar Btn

const navList = document.querySelector(".nav-list");
const links = document.querySelector(".nav-links");
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", function(){

    // Show nav List
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = navList.getBoundingClientRect().height;

    if(containerHeight === 0){
        navList.classList.add(".show-list");
        navList.style.height = `${linksHeight}px`;
    }
    else {
        navList.style.height = 0;
    }

    navBtn.classList.toggle("active");
})




