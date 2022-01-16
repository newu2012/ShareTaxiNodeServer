const express = require('express');
const {
    addTrip,
    getAllTrips,
    getTrip,
    updateTrip,
    deleteTrip,
} = require('../controllers/tripController');
const router = express.Router();

router.post('/', addTrip);
router.get('/', getAllTrips);
router.get('/:id', getTrip);
router.put('/:id', updateTrip);
router.delete('/:id', deleteTrip);

module.exports = router;

