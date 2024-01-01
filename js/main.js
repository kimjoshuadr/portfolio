/**--NAV BAR-- */
// button click
document.querySelector('.uil-bars').addEventListener('click', () => {
    const navBar = document.querySelector('.nav-bar')
    navBar.classList.toggle('hidden')
})
// scroll shadow
// window.onscroll = function(){
//     const navHeader = document.getElementById('header')
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
// }
document.addEventListener('scroll', () => {
    let lastKnownScrollPosition = window.scrollY
    console.log(lastKnownScrollPosition)
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
})