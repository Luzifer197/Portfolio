
const navEl = document.querySelector('.navbar');
const imageEl = document.querySelector('.logo');
const aEl = document.querySelector('.menubaritem');

window.addEventListener('scroll', () => {

    if( window.scrollY >= 50){
        try{
            navEl.classList.add('onscroll');
            imageEl.classList.add('logowhilescrolling');
            aEl.classList.remove('textcolormenubar');
        }
        catch (e) {
            console.log("error while adding classes at scrolling: " + e)
        }

    } else{
        try{
            navEl.classList.remove('onscroll');
            imageEl.classList.remove('logowhilescrolling');
            aEl.classList.add('textcolormenubar');
        }
        catch (e) {
            console.log("error while remove classes at scrolling: " + e)
        }
    }
})