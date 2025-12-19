const planets = document.querySelectorAll('.planet');
const orbitalPeriods = [0.24, 0.62, 1.0, 1.88, 11.86, 29.46, 84.01, 164.8];

planets.forEach((planet, index) => {
    let angle = Math.random() * Math.PI * 2; 
    let baseSpeed = 0.005; 
    let speed = baseSpeed / orbitalPeriods[index]; 
    let distance = 80 + (index * 45); 

    function orbit() {
        angle += speed;
        let x = Math.cos(angle) * distance;
        let y = Math.sin(angle) * distance;
        planet.style.left = `calc(50% + ${x}px)`;
        planet.style.top = `calc(50% + ${y}px)`;
        planet.style.transform = "translate(-50%, -50%)";
        
        requestAnimationFrame(orbit);
    }
    orbit();

    planet.addEventListener('click', () => {
        window.location.href = planet.dataset.url;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const space = document.querySelector('.space-bg');
    const starCount = 150; 

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        const x = Math.random() * 100 + '%';
        const y = Math.random() * 100 + '%';
        const duration = Math.random() * 3 + 2 + 's';

        star.style.width = size;
        star.style.height = size;
        star.style.left = x;
        star.style.top = y;
        star.style.setProperty('--duration', duration);

        space.appendChild(star);
    }
});

document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => {
        const url = planet.getAttribute('data-url');
        window.location.href = url;
    });
});