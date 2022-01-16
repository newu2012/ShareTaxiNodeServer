'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


module.exports = router;
