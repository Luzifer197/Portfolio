// ===============================
// Mobile Menü Umschalten (Hamburger-Button)
// ===============================
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// ===============================
// Smooth Scrolling für Navigation
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Abstand zur festen Navigation
                behavior: 'smooth'
            });

            // Mobile Menü schließen, falls offen
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.add('hidden');
        }
    });
});

// ===============================
// Particles.js nur auf großen Bildschirmen laden
// ===============================
function loadParticlesJS() {
    const script = document.createElement('script');
    script.src = './particle.js';
    script.onload = function() {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#3b82f6"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3b82f6",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    };
    document.head.appendChild(script);
}

loadParticlesJS();


// ===============================
// Karten-Animation beim Scrollen
// ===============================
function animateOnScroll() {
    const elements = document.querySelectorAll('.card-hover-effect');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Event Listener für Scroll und Initialisierung
window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Anfangszustand für animierte Karten setzen
document.querySelectorAll('.card-hover-effect').forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transform = 'translateY(20px)';
});

// ===============================
// Dark Mode Funktionalität
// ===============================
const darkModeToggle = document.getElementById('dark-mode-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Prüfen, ob ein Theme gespeichert ist oder System-Theme nutzen
const currentTheme = localStorage.getItem('theme') ||
    (prefersDarkScheme.matches ? 'dark' : 'light');
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
}

// Umschalten zwischen Dark/Light Mode
darkModeToggle.addEventListener('click', function() {
    const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
});

// System-Theme-Änderungen beobachten
prefersDarkScheme.addEventListener('change', e => {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
});

/*
    Was macht dieser Code?
    - Das mobile Menü wird per Button ein- und ausgeblendet (Tailwind: .hidden, .md:hidden).
    - Navigation-Links scrollen sanft zu den jeweiligen Abschnitten.
    - Partikel-Hintergrund (particles.js) wird nur auf großen Bildschirmen geladen.
    - Karten mit .card-hover-effect werden beim Scrollen mit Fade/Slide-In animiert.
    - Dark Mode kann per Button umgeschaltet werden und merkt sich die Einstellung im Browser.
    - Tailwind-Klassen wie .hidden, .md:hidden, .card-hover-effect, .dark usw. steuern das Layout, Animationen und Farbschema.
*/

