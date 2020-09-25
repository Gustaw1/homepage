const navSlider = ()=> {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    //Toggle nav
    hamburger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

    //Hamburger animation
    hamburger.classList.toggle('toggle');
    });
}

navSlider();