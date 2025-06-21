document.addEventListener('DOMContentLoaded', function () {
    const mapaDiv = document.getElementById('map');
    if (!mapaDiv) return;

    // 1. Inicializar el mapa
    const latitudCV = 4.605827;
    const longitudCV = -74.220333;
    const map = L.map('map').setView([latitudCV, longitudCV], 15);
    let marker = null; // Variable para guardar nuestro marcador

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // 2. Escuchar clics en el mapa
    map.on('click', function(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;

        // 3. Colocar o mover el marcador
        if (marker === null) {
            // Si no hay marcador, lo crea
            marker = L.marker(e.latlng).addTo(map);
        } else {
            // Si ya existe, solo mueve su posición
            marker.setLatLng(e.latlng);
        }

        // 4. Actualizar los campos ocultos del formulario
        document.getElementById('latitud').value = lat.toFixed(6);
        document.getElementById('longitud').value = lng.toFixed(6);

        // 5. Dar feedback al usuario
        document.getElementById('coords-feedback').textContent = `Punto seleccionado en: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        marker.bindPopup(`Coordenadas: ${lat.toFixed(4)}, ${lng.toFixed(4)}`).openPopup();
    });
});