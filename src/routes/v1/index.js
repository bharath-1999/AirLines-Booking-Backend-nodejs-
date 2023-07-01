const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller')
const flightsController = require ('../../controllers/flights-controller');

router.post('/city', CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get)
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update)

router.post('/flights',flightsController.create)
router.get('/flights', flightsController.getAll);
module.exports = router;