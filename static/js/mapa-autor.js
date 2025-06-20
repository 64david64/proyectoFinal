document.addEventListener('DOMContentLoaded', function () {

    const latitudUni = 4.628158297019748;
    const longitudUni = -74.06590820354154;

    const mapaDiv = document.getElementById('mapaUniversidad');

    if (mapaDiv) {

        const mapaU = L.map('mapaUniversidad').setView([latitudUni, longitudUni], 17); 

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapaU);

        L.marker([latitudUni, longitudUni]).addTo(mapaU)
            .bindPopup("<b>Universidad Distrital F.J.C.</b><br>Facultad de Ingeniería") 
            .openPopup(); 
    }
});