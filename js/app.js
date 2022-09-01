const openBtn = document.querySelector('.toggle-icon')
const closeBtn = document.querySelector('.close-menu')
const mobileNav = document.querySelector('.mobile-nav')
const navItemBtn = document.querySelectorAll('.mobile-nav-content')

const openSideNav = () => {
    mobileNav.style.right = '0%';
}

const closeSideNav = () => {
    mobileNav.style.right = '-100%';
}
openBtn.addEventListener('click', openSideNav)
closeBtn.addEventListener('click', closeSideNav)
