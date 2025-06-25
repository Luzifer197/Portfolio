// Toggler Theme: 
const toggle = document.getElementById('darkModeToggle');
const icon = toggle.querySelector('i');

function updateIcon() {
    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}
updateIcon();

toggle.addEventListener('click', () => {
document.body.classList.toggle('dark');
updateIcon();
});