const express = require('express');
const {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController');
const router = express.Router();

router.post('/', addUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

