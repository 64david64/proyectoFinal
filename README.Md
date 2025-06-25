# UrbFlow: Análisis de Transporte en Soacha

<p align="center">
  <img src="https://github.com/64david64/proyectoFinal/blob/main/static/svg/logo.svg?raw=true" alt="Logo de UrbFlow" width="120">
</p>

<p align="center">
  Una aplicación web diseñada para la visualización y reporte ciudadano de incidencias en el sistema de transporte público del municipio de Soacha, Cundinamarca.
</p>

---

### 📝 Descripción del Proyecto

**UrbFlow** es una iniciativa académica que nace para abordar la problemática de la **mala distribución y circulación de busetas** durante las horas pico nocturnas en Soacha. Mediante una interfaz web moderna, el proyecto busca no solo analizar y visualizar los desafíos de movilidad, sino también fomentar la participación ciudadana a través del reporte de incidencias geolocalizadas.

El objetivo es crear una herramienta que sirva como base para la recolección de datos y el futuro análisis de soluciones de ingeniería y planificación urbana.

### ✨ Características Principales

* **Interfaz Oscura y Profesional:** Un diseño enfocado en la experiencia de usuario y la comodidad visual.
* **Mapa Interactivo para Reportes:** Los usuarios pueden hacer clic en un mapa para seleccionar la ubicación exacta de una incidencia y reportarla.
* **Formulario Estructurado:** Un formulario claro para añadir nuevos puntos de interés (paraderos o incidencias) con datos relevantes.
* **Secciones Informativas:** Páginas dedicadas a explicar la motivación del proyecto, el autor y las tecnologías empleadas.
* **Diseño Adaptable:** Una estructura fluida que se ajusta a diferentes tamaños de pantalla.

### 🚀 Stack Tecnológico

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **Python** | Lenguaje principal que impulsa toda la lógica del servidor (backend). |
| **Flask** | Micro-framework web utilizado para construir la aplicación, gestionar rutas y servir páginas. |
| **SQLAlchemy** | Facilita la comunicación entre Python y la base de datos PostgreSQL de forma orientada a objetos. |
| **HTML5** | Lenguaje de marcado para estructurar semánticamente todo el contenido del portal. |
| **CSS3** | Se encarga de todo el diseño visual, desde la paleta de colores hasta las animaciones. |
| **JavaScript** | Aporta interactividad en el navegador, especialmente en la gestión de los mapas. |
| **Leaflet.js**| Biblioteca JavaScript clave para la creación de los mapas interactivos. |
| **GitHub** | Plataforma para el control de versiones con Git y el despliegue a través de GitHub Actions. |

### 📂 Estructura del Proyecto

```
proyectoFinal/
│
├── static/
│   ├── css/
│   │   ├── estilos.css           # Estilos globales y tema principal
│   │   └── (otros archivos css...)
│   │
│   ├── js/
│   │   ├── (archivos javascript...)
│   │
│   └── img/
│       └── (imágenes, logos, etc.)
│
├── templates/
│   ├── index.html
│   ├── acerca.html
│   ├── (y demás páginas...)
│
├── programa.py             # Archivo principal de la aplicación Flask
├── requirements.txt        # Lista de dependencias de Python
└── README.md               # Este archivo de documentación
```

---
*Proyecto desarrollado por Juan David Acosta Rodríguez.*