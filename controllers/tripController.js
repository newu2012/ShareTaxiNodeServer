'use strict';

const firebase = require('../db');
const Trip = require('../models/trip');
const firestore = firebase.firestore();


const addTrip = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('trip').doc().set(data);
        res.send('Trip saved successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllTrips = async (req, res, next) => {
    try {
        const data = await firestore.collection('trip').get();
        const trips = [];
        if (data.empty) {
            res.status(404).send('No trip found');
        } else {
            data.forEach(doc => {
                const trip = new Trip(
                    doc.id,
                    doc.data().costOverall,
                    doc.data().creatorId,
                    doc.data().currentCompanions,
                    doc.data().departureTime,
                    doc.data().fromPointAddress,
                    doc.data().maximumCompanions,
                    doc.data().toPointAddress,
                );
                trips.push(trip);
            });
            res.send(trips);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getTrip = async (req, res, next) => {
    try {
        const id = req.params.id;
        const trip = await firestore.collection('trip').doc(id);
        const data = await trip.get();
        if (!data.exists) {
            res.status(404).send('Trip with the given ID not found');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateTrip = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const trip = await firestore.collection('trip').doc(id);
        await trip.update(data);
        res.send('Trip updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteTrip = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('trip').doc(id).delete();
        res.send('Trip deleted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addTrip,
    getAllTrips,
    getTrip,
    updateTrip,
    deleteTrip,
}