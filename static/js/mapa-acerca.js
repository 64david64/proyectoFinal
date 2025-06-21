document.addEventListener('DOMContentLoaded', function () {
    const mapaDiv = document.getElementById('mapAcerca');

    if (mapaDiv) {
        const latitudCV = 4.605827;
        const longitudCV = -74.220333;

        const mapa = L.map('mapAcerca').setView([latitudCV, longitudCV], 14);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapa);

        const polygonCoordinates = [
            [4.614161, -74.216298], [4.604428, -74.208697], [4.597332, -74.220971],
            [4.597484, -74.223574], [4.598913, -74.225876], [4.599918, -74.226906],
            [4.603156, -74.226687], [4.605674, -74.230974], [4.609744, -74.230948],
            [4.613254, -74.226228], [4.614907, -74.218394]
        ];
        L.polygon(polygonCoordinates).addTo(mapa);

        setTimeout(function () {
            mapa.invalidateSize();
        }, 250);

        console.log("Mapa de 'Acerca de' inicializado correctamente.");
    }
});