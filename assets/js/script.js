// toogle menu navbar
let menu = document.getElementById('menulist');
let toggleMenuIcon = document.getElementById('togglemenu');
menu.style.maxHeight = "0px";
let menuOpen = false;

// fungsi toggle menu
function togglemenu() {
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "16rem";
        menuOpen = true;
    } else {
        menu.style.maxHeight = "0px";
        menuOpen = false;
    }
}

toggleMenuIcon.addEventListener('click', togglemenu);
const menuLinks = document.querySelectorAll('#menulist li a');

// event listener setiap link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.style.maxHeight = "0px";
        menuOpen = false;
    });
});

// funtion scrolled
document.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log(`scrollTop: ${scrollTop}`); // Debugging:
    
    const header = document.getElementById('header');
    const hero = document.getElementById('home');

    const heroOffsetTop = hero.offsetTop;
    console.log(`heroOffsetTop: ${heroOffsetTop}`); // Debugging
    
    if ( scrollTop > heroOffsetTop || menuOpen) {
        header.classList.add('scrolled');
        console.log("Scrolled class added"); // Debugging
    } else {
        header.classList.remove('scrolled');
        console.log("Scrolled class removed"); // Debugging
    }

    // atur link navbar sesuai dengan scroll position
    const sections = document.querySelectorAll('main, section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSectionId = '';

    // memeriksa posisi tiap section
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const offset = 100;

        if (scrollTop + offset >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // tambah/hapus class `active` pada link navbar
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});

// fungsi video
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    video.playbackRate = 1.5;
});

// alert screen
document.addEventListener("DOMContentLoaded", function () {
    function checkScreenWidth() {
        if (window.innerWidth > 431 && window.innerWidth < 1024) {
            document.body.innerHTML = '<div class="small-screen-message">Maaf, untuk saat ini tampilan tidak tersedia pada screen ini :)</div>';
        }
    }    
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});