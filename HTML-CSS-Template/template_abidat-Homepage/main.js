
const navEl = document.querySelector('.navbar');
const imageEl = document.querySelector('.logo');
const aEl = document.querySelectorAll('.menubaritem');

window.addEventListener('scroll', () => {

    if( window.scrollY >= 50){
        try{
            navEl.classList.add('bg-white');
            navEl.classList.add('navbar-light');
            navEl.classList.remove('navbar-dark');
            imageEl.classList.add('logowhilescrolling');
            aEl.forEach( elem => { elem.classList.remove('text-white')});
            aEl.forEach( elem => { elem.classList.add('text-dark')});
        }
        catch (e) {
            console.log("error while adding classes at scrolling: " + e)
        }

    } else{
        try{
            navEl.classList.remove('bg-white');
            navEl.classList.remove('navbar-light');
            navEl.classList.add('navbar-dark');
            imageEl.classList.remove('logowhilescrolling');
            aEl.forEach( elem => { elem.classList.remove('text-dark')});
            aEl.forEach( elem => { elem.classList.add('text-white')});
        }
        catch (e) {
            console.log("error while remove classes at scrolling: " + e)
        }
    }
})