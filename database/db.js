const mysql = require('mysql2');
var fs = require("fs");
require('dotenv').config() // https://dev.to/_staticvoid/accessing-env-files-natively-with-nodejs-44hf - ACCESS TO ENV Vars

const {DB_HOST, DB_PORT,DB_USER, DB_PASS} = process.env

/**
 * Método que configura un objeto conexión y lo regresa a quien lo solicite.
 * 
 * Instrucciones:
 * 
 * 1. Debes agregar en la carpeta raíz del proyecto un archivo .env donde configures variables de entorno.
 * 2. Configura la información de tu BD en las variables de entorno.
 * 3. Si estás usando Aiven, incluye tambien tu certificado SSL con una ruta válida de tu computadora.
 * 4. En la carpeta database te dejo compartido un archivo .sql para que puedas hacer restore de mi base de datos.
 */
function getConnection(){
  const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASS,
    database: "iot",
    dateStrings: true, //https://stackoverflow.com/questions/49475282/mysql-date-different-while-retrieving-from-node-js - Ignore timezone and use dates as strings
    ssl: {
      ca: fs.readFileSync('C:/Conciencia/Projects/ca_tec.pem')
    }
  });

  return connection;
}

module.exports = {getConnection};
