/**
 * //GIT IGNORE: https://github.com/github/gitignore/blob/main/Node.gitignore
 * 
 * Cómo debes configurar y usar tu API
 * 
 * 1. Instala todas las dependencias.
 *    1.1. Desde una terminal, accede a la carpeta del API donde se ubica este archivo (app.js)
 *    1.2. En la terminal ejecuta el comando:
 *         > npm install  //Instalará todas las dependencias necesarias.
 * 2. Copia y pega el archvio sensorTemperatura y sustituye la información correspondiente a cada uno de
 *     tus sensores.
 * 3. Sigue las instrucciones de cada archvio.
 *    3.1. En el archivo /database/db.js sustituye la información para la que corresponda a tu base de datos local
 *    3.2. En el archvio de cada sensor, sigue las instrucciones para modificar los queries SQL de cada una de tus tablas
 *    3.3. En el archivo route, configura tu servidor para que cada endpoint se habilite y tenga una URL
 * 4. Arranca tu API.
 *    4.1. Desde una terminal, accede a la carpeta del API donde se ubica este archivo (app.js)
 *    4.2. Ejecuta el siguiente comando, para arrancar tu api:
 *         > node app.js
 * 
 *    4.3. Deberás ver un mensaje que te indique que el servidor está corriendo en el puerto 3000.
 * 5. Para enviar datos desde tu NodeMCU, deberás utilizar la instrucción correspondiente para hacer una petición
 *    HTTP POST o GET
 */


//Incluye en tu proyecto las dependencias necesarias
const constants = require("./constants")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./route')


/**
 * Paso 1: Crear el servidor con Express.
 */
const app = express();
const port = constants.serverPort;


/** 
 * Configuración del servidor web.
 * 1. Cors es una configuración requerida. 
 *     https://es.wikipedia.org/wiki/Intercambio_de_recursos_de_origen_cruzado#:~:text=El%20intercambio%20de%20recursos%20de,que%20sirvi%C3%B3%20el%20primer%20recurso. 
 * 2. BodyParser nos permitirá recibir información en un formato llamado JSON
 *    JavaScript Object Notation.
 */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Paso 2: Crear algunos endpoints básicos para el crud.
 * Para ver todos los endpoints agregados al momento, consulta el archivo /routes/route.js
 */
app.use(router);


// Primer endpoint que se crea en el app web. Simplemente respode un mensaje cuando haces una petición a la url: http://localhost:3000/
app.get("/", (req, res) => {
    res.send('Hello world!')
});

//arranque del server 
app.listen(port, () => {
    console.log('Server started running on : ' + port)
})