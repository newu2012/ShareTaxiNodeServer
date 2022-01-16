'use strict';

const firebase = require('../db');
const Message = require('../models/message');
const firestore = firebase.firestore();


const addMessage = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('message').doc().set(data);
        res.send('Message saved successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllMessages = async (req, res, next) => {
    try {
        const data = await firestore.collection('message').get();
        const messages = [];
        if (data.empty) {
            res.status(404).send('No message found');
        } else {
            data.forEach(doc => {
                const message = new Message(
                    doc.id,
                    doc.data().args,
                    doc.data().date,
                    doc.data().isSystem,
                    doc.data().text,
                    doc.data().tripId,
                    doc.data().userId,
                );
                messages.push(message);
            });
            res.send(messages);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getMessage = async (req, res, next) => {
    try {
        const id = req.params.id;
        const message = await firestore.collection('message').doc(id);
        const data = await message.get();
        if (!data.exists) {
            res.status(404).send('Message with the given ID not found');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateMessage = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const message = await firestore.collection('message').doc(id);
        await message.update(data);
        res.send('Message updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteMessage = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('message').doc(id).delete();
        res.send('Message deleted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addMessage,
    getAllMessages,
    getMessage,
    updateMessage,
    deleteMessage,
}