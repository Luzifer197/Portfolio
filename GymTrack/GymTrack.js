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
        '../assets/background/desktop/45753-neu-dunkle-hintergrundbilder-hd-1920x1080-ipad-pro.jpg',
        '../assets/background/desktop/45877-amazing-dunkle-hintergrundbilder-hd-1920x1080-windows-7.jpg',
        '../assets/background/desktop/45880-dunkle-hintergrundbilder-hd-1920x1080-ios.jpg',
        '../assets/background/desktop/45902-amazing-dunkle-hintergrundbilder-hd-1920x1080-retina.jpg',
        '../assets/background/desktop/45941-dunkle-hintergrundbilder-hd-1920x1080-lockscreen.jpg',
        '../assets/background/desktop/45944-beste-dunkle-hintergrundbilder-hd-1920x1200-hd.jpg',
        '../assets/background/desktop/45955-dunkle-hintergrundbilder-hd-1920x1080-fuer-desktop.jpg',
        '../assets/background/desktop/45962-full-size-dunkle-hintergrundbilder-hd-3840x2160-fuer-tablet.jpg',
        '../assets/background/desktop/45966-dunkle-hintergrundbilder-hd-1920x1080-fuer-ipad-mini-retina.jpg',
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('background').style.backgroundImage = `url('${randomImage}')`;
} else if (getDeviceType() === "mobile") {
        document.getElementById('offcanvasNavbar').classList.add('glass-card');
        const images = [
        '../assets/background/mobile/824062.jpg',
        '../assets/background/mobile/1582100.jpg',
        '../assets/background/mobile/3532187.jpg',
        '../assets/background/mobile/4599979.jpg',
        '../assets/background/mobile/4599993.jpg',
        '../assets/background/mobile/5105472.jpg',
        '../assets/background/mobile/6633440.jpg',
        '../assets/background/mobile/7176563.jpg',
        '../assets/background/mobile/7826704.jpg',
        '../assets/background/mobile/7176563.jpg',
        '../assets/background/mobile/7826704.jpg',
        '../assets/background/mobile/7826708.jpg',
        '../assets/background/mobile/7826712.jpg',
        '../assets/background/mobile/7826758.jpg',
        '../assets/background/mobile/1565113.jpeg',
        '../assets/background/mobile/83365465.jpeg',
        '../assets/background/mobile/831651665.jpeg',
        '../assets/background/mobile/913554.jpeg',
        '../assets/background/mobile/81321.jpeg',
        '../assets/background/mobile/6544845151545.jpeg',
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('background').style.backgroundImage = `url('${randomImage}')`;
}