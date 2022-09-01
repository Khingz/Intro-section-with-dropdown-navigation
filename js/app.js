const openBtn = document.querySelector('.toggle-icon')
const closeBtn = document.querySelector('.close-menu')
const mobileNav = document.querySelector('.mobile-nav')
const navItemBtn = document.querySelectorAll('.mobile-nav-content')
const body = document.querySelector('.body')

const openSideNav = () => {
    mobileNav.style.right = '0%';
    body.style.opacity ='0.2'
}

const closeSideNav = () => {
    mobileNav.style.right = '-100%';
    body.style.opacity ='9'
}
openBtn.addEventListener('click', openSideNav)
closeBtn.addEventListener('click', closeSideNav)
