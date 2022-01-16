const express = require('express');
const {
    addMessage,
    getAllMessages,
    getMessage,
    updateMessage,
    deleteMessage,
} = require('../controllers/messageController');
const router = express.Router();

router.post('/', addMessage);
router.get('/', getAllMessages);
router.get('/:id', getMessage);
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessage);

module.exports = router;

