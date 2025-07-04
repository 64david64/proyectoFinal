document.addEventListener('DOMContentLoaded', () => {

    const UrbFlowApp = {

        init() {
            console.log("Iniciando UrbFlow App...");
            this.initThemeSwitcher();
            this.initNavMenu();
            this.initSwiper();
            this.initMaps();
            this.initCollaborateCardAnimations(); 
            this.initTechCardAnimations();      
        },

        initThemeSwitcher() {
            const themeToggle = document.getElementById('theme-toggle');
            if (!themeToggle) return;
            
            const body = document.body;
            const updateButtonText = () => {
                themeToggle.textContent = body.classList.contains('light-theme') ? '🌙 Modo Oscuro' : '☀️ Modo Claro';
            };

            const applyInitialTheme = () => {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedTheme) {
                    body.classList.toggle('light-theme', savedTheme === 'light-theme');
                } else {
                    body.classList.toggle('light-theme', !prefersDark);
                }
                updateButtonText();
            };

            themeToggle.addEventListener('click', () => {
                body.classList.toggle('light-theme');
                localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme');
                updateButtonText();
            });

            applyInitialTheme();
        },

        initNavMenu() {
            const navToggle = document.querySelector('.nav-toggle');
            const navLinks = document.querySelector('.nav-links');
            if (!navToggle || !navLinks) return;

            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('nav-links--visible');
                navToggle.setAttribute('aria-expanded', navLinks.classList.contains('nav-links--visible'));
            });
        },

        initSwiper() {
            const swiperContainer = document.querySelector('.swiper');
            if (!swiperContainer) return;

            new Swiper('.swiper', {
                loop: true,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                pagination: { el: '.swiper-pagination', clickable: true },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            });
        },
        
        initCollaborateCardAnimations() {
            const cards = document.querySelectorAll('.colaborar-card');
            this.applyStaggeredAnimation(cards);
        },
        
        initTechCardAnimations() {
            const techCards = document.querySelectorAll('.tech-card');
            this.applyStaggeredAnimation(techCards);
        },

        applyStaggeredAnimation(elements) {
            if (elements.length === 0) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.08}s`; 
                observer.observe(element);
            });
        },

        initMaps() {
            this.initAcercaMap();
            this.initAutorMap();
            this.initAddPointMap();
        },

        initAcercaMap() {
            const container = document.getElementById('mapa-acerca');
            if (!container) return;
            const map = L.map(container).setView([4.605827, -74.220333], 14);
            this.addTileLayer(map);
            const polygonCoords = [
                [4.614161, -74.216298], [4.604428, -74.208697], [4.597332, -74.220971],
                [4.597484, -74.223574], [4.598913, -74.225876], [4.599918, -74.226906],
                [4.603156, -74.226687], [4.605674, -74.230974], [4.609744, -74.230948],
                [4.613254, -74.226228], [4.614907, -74.218394]
            ];
            L.polygon(polygonCoords).addTo(map).bindPopup("Área de estudio principal.");
        },

        initAutorMap() {
            const container = document.getElementById('mapaUniversidad');
            if (!container) return;
            const map = L.map(container).setView([4.628158, -74.065908], 17);
            this.addTileLayer(map);
            L.marker([4.628158, -74.065908]).addTo(map)
                .bindPopup("<b>Universidad Distrital F.J.C.</b><br>Facultad de Ingeniería")
                .openPopup();
        },

        initAddPointMap() {
            const container = document.getElementById('mapa-add-point');
            if (!container) return;
            const map = L.map(container).setView([4.605827, -74.220333], 15);
            this.addTileLayer(map);
            let marker = null;
            map.on('click', (e) => {
                const lat = e.latlng.lat;
                const lng = e.latlng.lng;
                if (marker === null) {
                    marker = L.marker(e.latlng).addTo(map);
                } else {
                    marker.setLatLng(e.latlng);
                }
                document.getElementById('latitud').value = lat.toFixed(6);
                document.getElementById('longitud').value = lng.toFixed(6);
                document.getElementById('coords-feedback').textContent = `Punto seleccionado: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
                marker.bindPopup(`Coordenadas: ${lat.toFixed(4)}, ${lng.toFixed(4)}`).openPopup();
            });
        },

        addTileLayer(map) {
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        }
    };

    UrbFlowApp.init();
});