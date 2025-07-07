# UrbFlow: Análisis de Transporte en Soacha 🚗💨

<p align="center">
  <img src="https://raw.githubusercontent.com/64david64/proyectoFinal/main/static/svg/logo.svg" alt="Logo de UrbFlow" width="120">
</p>

<p align="center">
  Una aplicación web diseñada para la visualización y reporte ciudadano de incidencias en el sistema de transporte público del municipio de Soacha, Cundinamarca.
</p>

---

### 📝 Descripción del Proyecto

**UrbFlow** es una iniciativa académica que nace para abordar la problemática de la **mala distribución y circulación de busetas** durante las horas pico nocturnas en Soacha. Mediante una interfaz web moderna, el proyecto busca no solo analizar y visualizar los desafíos de movilidad, sino también fomentar la participación ciudadana a través del reporte de incidencias geolocalizadas.

El objetivo es crear una herramienta que sirva como base para la recolección de datos y el futuro análisis de soluciones de ingeniería y planificación urbana.

### ✨ Características Principales

* **Interfaz Moderna y Profesional:** Un diseño enfocado en la experiencia de usuario con modos claro y oscuro conmutables.
* **Mapa Interactivo para Reportes:** Los usuarios pueden hacer clic en un mapa para seleccionar la ubicación exacta de una incidencia.
* **Visualización de Datos:** Un mapa dedicado que muestra todos los incidentes reportados por la comunidad, con detalles en ventanas emergentes.
* **Feedback al Usuario:** Páginas de confirmación de éxito y de error 404 personalizadas para una experiencia de usuario completa.
* **Diseño Adaptable (Responsive):** Una estructura fluida que se ajusta perfectamente a diferentes tamaños de pantalla, desde móviles hasta escritorio.

### 🚀 Stack Tecnológico

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **Python** | Lenguaje principal que impulsa toda la lógica del servidor (backend). |
| **Flask** | Micro-framework web utilizado para construir la aplicación, gestionar rutas y servir páginas. |
| **SQLAlchemy** | Facilita la comunicación entre Python y la base de datos **SQLite** de forma orientada a objetos (ORM). |
| **HTML5** | Lenguaje de marcado para estructurar semánticamente todo el contenido del portal. |
| **CSS3** | Se encarga de todo el diseño visual, desde la paleta de colores hasta las animaciones. |
| **JavaScript** | Aporta interactividad en el navegador, especialmente en la gestión de los mapas y el tema visual. |
| **Leaflet.js** | Biblioteca JavaScript clave para la creación de los mapas interactivos. |
| **GitHub** | Plataforma utilizada para el control de versiones del código fuente con Git. |

### 📂 Estructura del Proyecto

```
proyectoFinal/
├── .venv/                  # Entorno virtual (ignorado por Git)
├── db/
│   └── bk_db               # Backup de la estructura de la base de datos
├── static/
│   ├── css/                # Hojas de estilo
│   ├── js/                 # Scripts de JavaScript
│   ├── img/                # Imágenes del proyecto
│   └── svg/                # Logos en formato SVG
├── templates/
│   ├── index.html
│   ├── acerca.html
│   ├── add-point.html
│   ├── visualizacion.html
│   ├── gracias.html
│   └── 404.html
├── .gitignore              # Archivo para ignorar ficheros en Git
├── api.py                  # Archivo principal de la aplicación Flask
├── README.md               # Este archivo de documentación
├── requirements.txt        # Lista de dependencias de Python
└── urbflow.db              # Base de datos SQLite (ignorada por Git)
```
### ⚡ Cómo Empezar
Sigue estos pasos para ejecutar el proyecto en tu máquina local.

#### Prerrequisitos
* Tener instalado [Python 3.10+](https://www.python.org/downloads/)
* Tener instalado [Git](https://git-scm.com/downloads/)

#### Instalación
1. **Clona el repositorio:**
    ```bash
    git clone [https://github.com/64david64/proyectoFinal.git](https://github.com/64david64/proyectoFinal.git)
    ```

2. **Navega a la carpeta del proyecto:**
    ```bash
    cd proyectoFinal
    ```

3. **Crea y activa un entorno virtual:**
    ```bash
    # Crear el entorno
    python -m venv .venv

    # Activar en Windows (CMD)
    .venv\Scripts\activate.bat
    ```

4. **Instala las dependencias:**
    ```bash
    pip install -r requirements.txt
    ```

5. **Ejecuta la aplicación:**
    ```bash
    python api.py
    ```
    La aplicación estará disponible en `http://127.0.0.1:5001`.

---
*Proyecto desarrollado por Juan David Acosta Rodríguez.*