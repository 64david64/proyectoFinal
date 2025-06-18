from flask_sqlalchemy import SQLAlchemy
from geoalchemy2 import Geometry
from sqlalchemy import Integer, String, DateTime
from datetime import datetime

db = SQLAlchemy()

class Paradero(db.Model):
    __tablename__ = 'paraderos'

    id = db.Column(Integer, primary_key=True)
    localizacion = db.Column(Geometry(geometry_type='POINT', srid=4326), nullable=False)
    numruta = db.Column(String(10), nullable=False)
    direccion = db.Column(String(50), nullable=False)
    horainicio = db.Column(DateTime, nullable=False)
    horafin = db.Column(DateTime, nullable=False)

    def __repr__(self):
        return f"<Paradero {self.numruta} - {self.direccion}>"