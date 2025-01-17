/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Video Editor', 'Content Creater', '3D Animator', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// Increment viewer count and update the counter on page load
// window.addEventListener("load", function () {
//     let count = parseInt(localStorage.getItem("viewerCount")) || 0;
//     count += 1;
//     localStorage.setItem("viewerCount", count);
//     document.getElementById("count").textContent = count;
// });



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

// Contact form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var emailAddress = 'imsikumlimbu@gmail.com';
    var subject = document.getElementsByName('subject')[0].value || 'No Subject';
    var body = 'Name: ' + document.getElementsByName('uname')[0].value + '\n' +
               'Email: ' + document.getElementsByName('email')[0].value + '\n' +
               'Mobile Number: ' + document.getElementsByName('number')[0].value + '\n' +
               'Message: ' + document.getElementsByName('message')[0].value;

    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Create a temporary link element
    var tempLink = document.createElement('a');
    tempLink.href = mailtoLink;

    // Trigger a click on the link to open the default email client
    tempLink.click();
});
