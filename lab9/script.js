const planets = document.querySelectorAll('.planet');
const infoPanel = document.getElementById('infoPanel');
const planetName = document.getElementById('planetName');
const planetInfo = document.getElementById('planetInfo');

planets.forEach((planet, index) => {
    let angle = 0;
    let speed = (index + 1) * 0.0008;

    function orbit() {
        angle += speed;

        let x = Math.cos(angle) * (80 + index * 40);
        let y = Math.sin(angle) * (80 + index * 40);

        planet.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(orbit);
    }

    orbit();

    planet.addEventListener('click', () => {
        planetName.innerText = planet.dataset.name;
        planetInfo.innerText = planet.dataset.info;
        infoPanel.style.display = "block";
    });
});

function closeInfo() {
    infoPanel.style.display = "none";
}
