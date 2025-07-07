# api.py
# -*- coding: utf-8 -*-

# --- 1. IMPORTACIONES (Se añade jsonify) ---
from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# --- 2. CONFIGURACIÓN ---
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///urbflow.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# --- 3. MODELO DE DATOS ---
class Incidencia(db.Model):
    __tablename__ = 'incidencias'
    
    id = db.Column(db.Integer, primary_key=True)
    numero_ruta = db.Column(db.String(50), nullable=True)
    direccion = db.Column(db.String(255), nullable=False)
    fecha_inicio = db.Column(db.DateTime, nullable=False)
    fecha_fin = db.Column(db.DateTime, nullable=False)
    latitud = db.Column(db.Float, nullable=False)
    longitud = db.Column(db.Float, nullable=False)
    descripcion = db.Column(db.Text, nullable=True)

# --- 4. RUTAS DE LA APLICACIÓN ---
@app.route('/')
def index():
    return render_template('index.html', active_page='index')

@app.route('/acerca')
def acerca():
    return render_template('acerca.html', active_page='acerca')

@app.route('/descripcion')
def descripcion():
    return render_template('descripcion.html', active_page='descripcion')

@app.route('/autor')
def autor():
    return render_template('autor.html', active_page='autor')

@app.route('/addpoint')
def addpoint_page():
    return render_template('add-point.html', active_page='addpoint_page')

@app.route('/gracias')
def gracias():
    return render_template('gracias.html')

# --- INICIO DE CÓDIGO AÑADIDO ---

# Nueva ruta para la página del mapa de visualización
@app.route('/visualizacion')
def visualizacion_page():
    return render_template('visualizacion.html', active_page='visualizacion')

# Nueva ruta API que devuelve los datos en formato JSON
@app.route('/api/incidencias')
def get_incidencias():
    todas_las_incidencias = Incidencia.query.all()
    lista_de_incidencias = []
    for incidencia in todas_las_incidencias:
        lista_de_incidencias.append({
            'id': incidencia.id,
            'latitud': incidencia.latitud,
            'longitud': incidencia.longitud,
            'descripcion': incidencia.descripcion,
            'fecha_inicio': incidencia.fecha_inicio.strftime('%Y-%m-%d %H:%M'),
            'numero_ruta': incidencia.numero_ruta,
            'direccion': incidencia.direccion
        })
    return jsonify(lista_de_incidencias)

# --- FIN DE CÓDIGO AÑADIDO ---

@app.route('/add_point', methods=['POST'])
def add_point_data():
    if request.method == 'POST':
        # ... (lógica del formulario sin cambios)
        lat = request.form.get('latitud')
        lon = request.form.get('longitud')

        if not lat or not lon:
            error_msg = "Error: Debes seleccionar un punto en el mapa."
            return render_template('add-point.html', error=error_msg, active_page='addpoint_page')

        fecha_inicio_obj = datetime.strptime(request.form['horainicio'], '%Y-%m-%dT%H:%M')
        fecha_fin_obj = datetime.strptime(request.form['horafin'], '%Y-%m-%dT%H:%M')

        nueva_incidencia = Incidencia(
            numero_ruta=request.form.get('numruta'),
            direccion=request.form['direccion'],
            fecha_inicio=fecha_inicio_obj,
            fecha_fin=fecha_fin_obj,
            latitud=float(lat),
            longitud=float(lon),
            descripcion=request.form.get('descripcion')
        )
        
        db.session.add(nueva_incidencia)
        db.session.commit()
        
        return redirect(url_for('gracias'))

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

# --- BLOQUE DE EJECUCIÓN ---
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5001)