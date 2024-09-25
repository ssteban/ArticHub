from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
from dotenv import load_dotenv
import mysql.connector
import bcrypt



app = FastAPI()
# Habilitar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Puedes restringir los orígenes aquí si es necesario
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#credenciales base de datos
load_dotenv()

DB_CONFIG = {
    'host': os.getenv('DB_HOST'),
    'database': os.getenv('DB_NAME'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'port': os.getenv('DB_PORT', 3306)
}



@app.post("/registrar")
async def registrar(request: Request):
    datos = await request.json()
    usuario=datos.get('usuario')
    correo=datos.get('correo')
    nombre=datos.get('nombre')
    genero=datos.get('genero')
    fechaNacimiento=datos.get('fecha')
    pais=datos.get('pais')
    contraseña=datos.get('contra')
    try:
        conn = mysql.connector.connect(**DB_CONFIG)
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM usuarios WHERE correo=%s', (correo,))
        if cursor.fetchone() is not None:
            cursor.close()
            conn.close()
            return  {"success": "false" ,"mensaje": "los datos ya se encuentran registrados"}
        else:
            contraseña = bcrypt.hashpw(contraseña.encode('utf-8'), bcrypt.gensalt())
            cursor.execute('''
            INSERT INTO usuarios (usuario, correo, nombre, genero, fechaNacimiento, pais, contraseña)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            ''', (usuario, correo, nombre, genero, fechaNacimiento, pais, contraseña))
            cursor.execute('''
            INSERT INTO Roll (correo) VALUES(%s)
            ''', (correo,))
            conn.commit()
            cursor.close()
            conn.close()
            return {"success": "true" ,"mensaje": "se a registrado de manera exitosa", "data": datos}
    except mysql.connector.Error as err:
        print(str(err))
        return {"success": "false", "mensaje": "Error en la base de datos intentelo mas tarde."}


@app.post("/iniciar")
async def iniciar(request: Request):
    datos = await request.json()
    usuario=datos.get('usuario')
    contraseña=datos.get('contraseña')
    try:
        conn = mysql.connector.connect(**DB_CONFIG)
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM usuarios WHERE correo=%s', (usuario,))
        usuario_encontrado = cursor.fetchone()
        if usuario_encontrado is None:
            cursor.close()
            conn.close()
            return {"success": "false", "mensaje": "Usuario no encontrado."}
        if usuario_encontrado['activo'] != 1:
            cursor.close()
            conn.close()
            return {"success": "false", "mensaje": "Usuario no activo. Por favor, contacte con soporte."}
        contraseña_almacenada = usuario_encontrado['contraseña']
        if bcrypt.checkpw(contraseña.encode('utf-8'), contraseña_almacenada.encode('utf-8')):
            cursor.execute('SELECT cargo FROM Roll WHERE correo=%s', (usuario,))
            cargo=cursor.fetchone()
            cursor.close()
            conn.close()
            return {"success": "true", "mensaje": "Inicio de sesión exitoso.", 'cargo': cargo['cargo']}
        else:
            cursor.close()
            conn.close()
            return {"success": "false", "mensaje": "Contraseña incorrecta."}
    except mysql.connector.Error as err:
        print(str(err))
        return {"success": "false", "mensaje": "Error en la base de datos intentelo mas tarde."}



if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
