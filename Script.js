let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.Navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => links.classList.remove('active'));
            
            let link = document.querySelector('header nav a[href*='+ id+ ']');
            if (link) {
                link.classList.add('active');
            }}})};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
};