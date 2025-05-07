var map = L.map('map').setView([4.605827, -74.220333,15], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon = L.polygon([

    [4.614161, -74.216298],
    [4.604428, -74.208697],
    [4.597332, -74.220971],
    [4.597484, -74.223574],
    [4.598913, -74.225876],
    [4.599918, -74.226906],
    [4.603156, -74.226687],
    [4.605674, -74.230974],
    [4.609744, -74.230948],
    [4.613254, -74.226228],
    [4.614907, -74.218394]

]).addTo(map);

console.log("Hola desde JS");

for (let i = 1; i <= 50; i++) {
    if (i % 9 !== 0 && i % 13 !== 0) {
        console.log(i);
    }
}
