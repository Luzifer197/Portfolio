
function getDeviceType() {
  const width = window.innerWidth;

  if (width < 768) {
    return "mobile";
  } else if (width >= 768 && width < 992) {
    return "tablet";
  } else {
    return "desktop";
  }
}

if (getDeviceType() === "desktop") {
    const images = [
        'assets/background/desktop/45753-neu-dunkle-hintergrundbilder-hd-1920x1080-ipad-pro.jpg',
        'assets/background/desktop/45767-dunkle-hintergrundbilder-hd-1920x1080-fuer-mac.jpg',
        'assets/background/desktop/45783-dunkle-hintergrundbilder-hd-1920x1080-smartphone.jpg',
        'assets/background/desktop/45877-amazing-dunkle-hintergrundbilder-hd-1920x1080-windows-7.jpg',
        'assets/background/desktop/45880-dunkle-hintergrundbilder-hd-1920x1080-ios.jpg',
        'assets/background/desktop/45887-beliebt-dunkle-hintergrundbilder-hd-1920x1080-mobile.jpg',
        'assets/background/desktop/45902-amazing-dunkle-hintergrundbilder-hd-1920x1080-retina.jpg',
        'assets/background/desktop/45941-dunkle-hintergrundbilder-hd-1920x1080-lockscreen.jpg',
        'assets/background/desktop/45944-beste-dunkle-hintergrundbilder-hd-1920x1200-hd.jpg',
        'assets/background/desktop/45955-dunkle-hintergrundbilder-hd-1920x1080-fuer-desktop.jpg',
        'assets/background/desktop/45959-neu-dunkle-hintergrundbilder-hd-1920x1080-fuer-retina.jpg',
        'assets/background/desktop/45962-full-size-dunkle-hintergrundbilder-hd-3840x2160-fuer-tablet.jpg',
        'assets/background/desktop/45966-dunkle-hintergrundbilder-hd-1920x1080-fuer-ipad-mini-retina.jpg',
        'assets/background/desktop/46031-beste-dunkle-hintergrundbilder-hd-1920x1080.jpg',
        'assets/background/desktop/46040-schoen-dunkle-hintergrundbilder-hd-1920x1080-fuer-retina.jpg',
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('background').style.backgroundImage = `url('${randomImage}')`;
} else if (getDeviceType() === "mobile") {
        document.getElementById('offcanvasNavbar').classList.add('glass-card');
        const images = [
        'assets/background/mobile/824062.jpg',
        'assets/background/mobile/1582100.jpg',
        'assets/background/mobile/3532187.jpg',
        'assets/background/mobile/4599979.jpg',
        'assets/background/mobile/4599993.jpg',
        'assets/background/mobile/5105472.jpg',
        'assets/background/mobile/6633440.jpg',
        'assets/background/mobile/7176563.jpg',
        'assets/background/mobile/7826704.jpg',
        'assets/background/mobile/7176563.jpg',
        'assets/background/mobile/7826704.jpg',
        'assets/background/mobile/7826708.jpg',
        'assets/background/mobile/7826712.jpg',
        'assets/background/mobile/7826758.jpg',
        'assets/background/mobile/1565113.jpeg',
        'assets/background/mobile/83365465.jpeg',
        'assets/background/mobile/821354131.jpeg',
        'assets/background/mobile/831651665.jpeg',
        'assets/background/mobile/8324546551.jpeg',
        'assets/background/mobile/913554.jpeg',
        'assets/background/mobile/81321.jpeg',
        'assets/background/mobile/6544845151545.jpeg',
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('background').style.backgroundImage = `url('${randomImage}')`;
}

const quote = [
    "Wenn du etwas so machst, wie du es seit zehn Jahren gemacht hast, dann sind die Chance groß, das du es falsch machst",
    "Wenn digitale Transformation richtig umsetzt wird, kann aus einer Raupe ein Schmetterling werden. Wenn man es falsch macht, hat man bestenfalls eine schnellere Raupe.",
    "Man sollte nie so viel zu tun haben, dass man zum Nachdenken keine Zeit mehr hat.",
    "Auf Wasser zu laufen und ein Software durch Spezifikationen zu entwickeln ist einfach, wenn beide eingefrohren sind.",
    "Es ist nicht die stärkste oder die intelligenteste Spezies die überlebt, sondern die, die sich am ehesten dem Wandel anpasst.",
    "Code ist wie Humor. Wenn man ihn erklären muss, ist er schlecht.",
    "Jeder Depp kann Code schreiben, den der Computer versteht. Gute Programmierer schreiben Code, den Menschen verstehen",
    "Das Web ist kein Ort, an dem man einfach nur baut – es ist ein Ort, an dem man kommuniziert",
    "Ein guter Entwickler denkt nicht nur an Code, sondern an Nutzer.",
    "Das beste Framework ist das, das du verstehst und kontrollierst.",
    "Im Web zählt jedes Byte, jede Millisekunde, jeder Klick."
]

const randomqoute = quote[Math.floor(Math.random() * quote.length)];
document.getElementById('quote').innerText = `"${randomqoute}"`;

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#skills-slider', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 4000,
      speed: 1000,
      pauseOnHover: false,
      arrows: false,
      pagination: false,
      drag: true,
      classes: {
        slide: 'splide__slide fade-slide',
      }
    }).mount();
  });

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#project-slider', {
    type: 'loop',
    perPage: 3,
    gap: '1rem',
    autoplay: true,
    interval: 4000,
    arrows: true,
    pagination: true,
    breakpoints: {
      992: { perPage: 2 },
      768: { perPage: 1 }
    }
  }).mount();
});