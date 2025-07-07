document.addEventListener('DOMContentLoaded', function () {
    // Verifica que el contenedor del mapa exista antes de inicializarlo
    const mapContainer = document.getElementById('mapa-visualizacion');
    if (!mapContainer) return;

    // 1. Inicializa el mapa, centrado en Soacha
    const map = L.map('mapa-visualizacion').setView([4.605827, -74.220333], 14);

    // 2. Añade la capa de mapa base (usamos OpenStreetMap, que es gratuito)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 3. Pide los datos de las incidencias a nuestra API
    fetch('/api/incidencias')
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue exitosa');
            }
            return response.json();
        })
        .then(incidencias => {
            console.log('Incidencias recibidas del backend:', incidencias); // Útil para depurar en la consola del navegador

            if (incidencias.length === 0) {
                mapContainer.innerHTML += '<p style="text-align:center; margin-top: 2em;">Aún no hay reportes para mostrar. ¡Sé el primero en añadir uno!</p>';
            }

            // 4. Recorre la lista de incidencias y crea un marcador para cada una
            incidencias.forEach(incidencia => {
                
                // Formatea el contenido que se mostrará en el popup
                const popupContent = `
                    <b>Ruta:</b> ${incidencia.numero_ruta || 'No especificada'}<br>
                    <b>Dirección:</b> ${incidencia.direccion || 'No especificada'}<br>
                    <b>Fecha:</b> ${incidencia.fecha_inicio}<br>
                    <b>Descripción:</b> ${incidencia.descripcion || 'Sin descripción.'}
                `;

                // Añade el marcador al mapa con su popup
                L.marker([incidencia.latitud, incidencia.longitud])
                    .addTo(map)
                    .bindPopup(popupContent);
            });
        })
        .catch(error => {
            console.error('Error al cargar los datos de las incidencias:', error);
            // Muestra un mensaje de error dentro del contenedor del mapa si la API falla
            mapContainer.innerHTML = '<p style="text-align:center; color:red;">No se pudieron cargar los datos del mapa. Inténtalo de nuevo más tarde.</p>';
        });
});