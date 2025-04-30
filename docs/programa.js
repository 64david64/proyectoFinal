var map = L.map('map').setView([4.5981596, -74.2295445,15], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon = L.polygon([

    [4.61, -74.21],
    [4.60, -74.20],
    [4.58, -74.20],
    [4.59, -74.22],
    [4.59, -74.22],
    [4.60, -74.22],
    [4.60, -74.22],
    [4.60, -74.22],
    [4.60, -74.22],
    [4.60, -74.23],
    [4.60, -74.23],
    [4.60, -74.23],
    [4.61, -74.22],
    [4.61, -74.22],
    [4.61, -74.22],
    [4.60, -74.22],
    [4.60, -74.22],
    [4.61, -74.22],
    [4.61, -74.22]

]).addTo(map);