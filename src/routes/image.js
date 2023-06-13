const express = require('express');
const { getImage } = require('../controllers/imageController');

const image = express();


image.get('/', getImage)
image.get('/all', getImages)