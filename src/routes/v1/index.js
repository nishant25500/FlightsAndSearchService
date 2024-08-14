const express = require('express');
const router = express.Router();
const CityController = require('../../controllers/city-controller');
const FlightController  = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

//city api 
// router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
router.post('/city',CityController.bulkCreate);

//flights api
router.post('/flights',FlightController.create);
router.get('/flights/:id',FlightController.get);
router.get('/flights',FlightController.getAll);

//airport api
router.post('/airports',AirportController.create);

module.exports = router; 