const mysql = require('mysql2');
var fs = require("fs");
require('dotenv').config() // https://dev.to/_staticvoid/accessing-env-files-natively-with-nodejs-44hf - ACCESS TO ENV Vars

const {DB_HOST, DB_PORT,DB_USER, DB_PASS} = process.env

/**
 * Método que configura un objeto conexión y lo regresa a quien lo solicite.
 * 
 * Instrucciones:
 * 
 * 1. Debes modificar tu información del "Password" de tu usuario Root en tu server
 * 2. Debes modificar el nombre de tu base de datos.
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
