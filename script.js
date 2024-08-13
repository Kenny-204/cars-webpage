'use strict'
const section1 = document.querySelector('.section--1');
const section = document.querySelectorAll('.section--a');
const toggleBtn = document.querySelector('.toggle_Btn')
const toggleBtnIcon = document.querySelector('.toggle_Btn i')
const dropdownMenu = document.querySelector('.dropdown--menu')

// car sliding into view

const carSlide = function () {
    section1.style.backgroundImage = ``;
    const image = new Image();
    image.src = 'img/sidecar.webp'
    image.addEventListener('load', function () {
        section1.style.backgroundImage = `url(${image.src})`;
        section1.classList.add('move');
    })
}
carSlide();
// Reveal sections
const revealSection = function () {

    const observe = function (entries, observer) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target)
        console.log(entry.target);

    };
    const options = {
        root: null,
        threshold: 0.05
    };
    section.forEach(el => {
        el.classList.add('section--hidden');
        const observer = new IntersectionObserver(observe, options);
        observer.observe(el);
    });
}
revealSection()

// Dropdown menu
const closeDropdown = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}
const dropdown = function () {
    toggleBtn.addEventListener('click', function () {
        closeDropdown()     
    })
    document.querySelector('body').addEventListener('click', function (e) {
        if (e.target.parentElement.classList.contains('dropdown--menu') || e.target.classList.contains('fa-solid') || e.target.classList.contains("dropdown--item"))  return 
        closeDropdown()
    })
}
dropdown()