/**
 * Instrucciones:
 * 
 * 1. Por cada sensor que tenga su tabla de base de datos corresponsientes, deberás crear 
 *    un archivo similar al archivo /api/sensorTemperatura.js
 * 2. Deberás incluirlo en un require, como lo estámos haciendo con el archvio sensorTemperatura en una variable
 *    temperaturaController. (linea 13 del archivo)
 * 3. Registra en el router todos los métodos disponibles en tu controlador con una URL que haga mencion a dicha acción
 * 
 * 
 */
const constants = require("./constants")
const express = require('express');
const temperaturaController = require('./RestControllers/sensorTemperatura.js'); 
const router = express.Router();

/**
 * URL's que debes configurar en tu server para incluir tus endpoints que reciben peticiones para cada 
 * sensor.
 */
router.get(constants.contextURL + constants.api + constants.getTemperatureSensor, temperaturaController.getLogTemperatura);
router.post(constants.contextURL + constants.api + constants.getTemperatureSensorByDate, temperaturaController.getLogByDateBetween);
router.post(constants.contextURL + constants.api + constants.postTemperatureSensor,temperaturaController.insertLogTemperatura);


//le decimos a Node que queremos hacer uso de nuestro router en otros archivos (como por ejemplo, app.js)
module.exports = router;