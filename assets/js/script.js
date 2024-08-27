// funtion scrolled
document.addEventListener('scroll', function() {
    //header dan hero
    const header = document.getElementById('header');
    const hero = document.getElementById('home');

    //posisi scroll dan offset
    const heroOffsetTop = hero.getBoundingClientRect().top + window.scrollY;
    const scrollTop = window.scrollY;

    // tambah/hapus kelas scrolled header
    if (scrollTop > heroOffsetTop) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    //navbar link
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

    // tambah/hapus kelas active link navbar
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});

// funtion video
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    video.playbackRate = 1.5;
});

// alert responsive
document.addEventListener("DOMContentLoaded", function () {
    function checkScreenWidth() {
        if (window.innerWidth < 1239) {
            document.body.innerHTML = '<div class="small-screen-message">Maaf, untuk saat ini hanya tersedia tampilan desktop saja</div>';
        }
    }    
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});