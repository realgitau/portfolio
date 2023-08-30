const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// Show
if(toggleMenu){
    toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

// Hide
if(closeMenu){
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const newMenu = document.getElementById('nav-menu')
    newMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change background header
const shadowHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height,
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

// testimonial skiper

// scroll section active link
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 200 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)