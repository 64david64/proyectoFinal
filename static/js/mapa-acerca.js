if (document.getElementById('mapAcerca')) {

    var mapAcerca = L.map('mapAcerca').setView([4.605827, -74.220333], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapAcerca);

    var polygonCoordinates = [
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
    ];

    var polygonAcerca = L.polygon(polygonCoordinates).addTo(mapAcerca);

    console.log("Mapa de 'Acerca de' inicializado y polígono añadido.");

} else {
    console.error("Error: No se encontró el elemento con id 'mapAcerca'. El mapa no puede inicializarse.");

        setTimeout(function () {
            mapa.invalidateSize();
        }, 100);
    }
