// button click
document.querySelector('.uil-bars').addEventListener('click', () => {
    const navBar = document.querySelector('.nav-bar')
    navBar.classList.toggle('hidden')
})
// scroll effect
document.addEventListener('scroll', () => {
    // scroll header shadow
    const lastKnownScrollPosition = window.scrollY
    const navHeader = document.getElementById('header')

    if (lastKnownScrollPosition > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)"
        navHeader.style.height = "70px"
        navHeader.style.lineHeight = "70px"
    } else {
        navHeader.style.boxShadow = "none"
        navHeader.style.height = "90px"
        navHeader.style.lineHeight = "90px"
    }
    // active scroll
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(currentSection => {
        const sectionTop = currentSection.offsetTop - 75
        const sectionHeight = currentSection.offsetHeight
        const sectionID = currentSection.getAttribute('id')
        if (lastKnownScrollPosition > sectionTop && lastKnownScrollPosition <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-list a[href*= ${sectionID}]`).classList.add('active-section')
        } else {
            document.querySelector(`.nav-list a[href*= ${sectionID}]`).classList.remove('active-section')
        }
    })
})
// typing effect
var typingEffect = new Typed('.animated-text',{
    strings: ["Kim Joshua","a Developer","a Freelancer","an Engineer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})
// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.hero-name',{})
sr.reveal('.hero-text',{delay: 100})
sr.reveal('.hero-text-info',{delay: 200})
sr.reveal('.hero-text-button',{delay: 200})
sr.reveal('.social-icons',{delay: 200})
sr.reveal('.hero-image-section',{delay: 300})

sr.reveal('.project-card',{interval: 200})

sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })

srRight.reveal('.skills-info',{delay: 100})
srRight.reveal('.form-control',{delay: 100})
