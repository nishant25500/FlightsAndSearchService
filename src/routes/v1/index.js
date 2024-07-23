const express = require('express');
const router = express.Router();
const CityController = require('../../controllers/city-controller');
const FlightController  = require('../../controllers/flight-controller');

//city api 
// router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
router.post('/city',CityController.bulkCreate);

//flights api
router.post('/flights',FlightController.create);
module.exports = router; 