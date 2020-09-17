//SELECT ELEMENT FUNCTION//
const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('open');
});
 
 
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('open');
    })
})
 
 
 
//Sroll Reveal//
window.sr = ScrollReveal();
 
sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
 
sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 100
});
 
sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 100
});
 
sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 100
});
 

