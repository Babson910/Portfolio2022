/*===== SCROLL REVEAL COMPETENCES =====*/
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL COMPETENCES*/
srtop.reveal('.timeline',{interval: 1200});


/*SCROLL TEXT TOWARDS THE BOTTOM*/ 
const srbottom = ScrollReveal({
    origin: 'bottom',
    distance: '70px',
    duration:3000,
    reset:true
});


srbottom.reveal('.mon_cv',{});
srbottom.reveal('.form-contact');
srbottom.reveal('.section-heading-minititre');



//SCROLL PAGE SECTION
const srleft = ScrollReveal({
    origin: 'left',
    distance: '90px',
    duration:3000,
    reset:true
});

srleft.reveal('.page-section-presentation h2.section-heading');
srleft.reveal('.page-section-projets h2.section-heading');
srleft.reveal('.page-section-parcours h2.section-heading');
srleft.reveal('.page-section-veille h2.section-heading');











