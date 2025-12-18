function openPlanet(planetName) {
    // Жишээ болгон Wikipedia-ийн холбоосыг ашиглав.
    // Та өөрийн бэлдсэн .html хуудсуудыг (жишээ нь: earth.html) холбож болно.
    const urls = {
        'mercury': 'https://mn.wikipedia.org/wiki/Буд_(гариг)',
        'venus': 'https://mn.wikipedia.org/wiki/Сугар_(гариг)',
        'earth': 'https://mn.wikipedia.org/wiki/Дэлхий',
        'mars': 'https://mn.wikipedia.org/wiki/Ангараг',
        'jupiter': 'https://mn.wikipedia.org/wiki/Бархасбадь',
        'saturn': 'https://mn.wikipedia.org/wiki/Шарванд',
        'uranus': 'https://mn.wikipedia.org/wiki/Тэнгэрийн_ван',
        'neptune': 'https://mn.wikipedia.org/wiki/Далайн_ван'
    };

    window.open(urls[planetName], '_blank');
}