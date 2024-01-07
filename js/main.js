// listen for click
Array.from(document.querySelectorAll('.nav-list a, .uil-bars, .icon, .hero-text-button button')).forEach(element => {
    element.addEventListener('click', () => {
        // nav menu
        if (element.classList.contains('uil-bars')) {
            document.querySelector('.nav-bar').classList.toggle('hidden')
        }
        if (element.classList.contains('nav-link')) {
            document.querySelector('.nav-bar').classList.remove('hidden')
        }
        // icon redirect
        if (element.classList.contains('linkedin')) {
            window.open(window.open('https://www.linkedin.com/in/kimjoshuadr0907/','mywindow'))
        } else if (element.classList.contains('github')) {
            window.open(window.open('https://github.com/kimjoshuadr','mywindow'))
        }
        // hero buttons
        if (element.id === 'site-button') {
            window.location = '#contact'
            document.getElementById('message-box').value = "I'm in need of a website, and I'd like to discuss the possibility of working together to bring my vision to life. More details are provided below:\n\n"
        }  else if (element.id === 'dev-button') {
            window.location = '#contact'
            document.getElementById('message-box').value = "I'm currently seeking a developer, and I'm interested in discussing the potential collaboration further. Additional details are outlined below:\n\n"
        }
    })
})
// scroll effect
document.addEventListener('scroll', () => {
    // scroll header shadow
    const lastKnownScrollPosition = window.scrollY
    const navHeader = document.getElementById('header')

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
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
