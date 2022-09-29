const express = require('express');
const { root, newImage, findImgById, retrieveAllImages, updateImgById, removeImgById, removeAllImg } = require('../controllers/item.controller');

const Router = express.Router();

Router.get('/', root);
Router.post('/newimage', newImage);
Router.get('/findimgbyid/:id', findImgById)
Router.get('/retrieveallimages', retrieveAllImages)
Router.put('/updateimgbyid/:id', updateImgById)
Router.delete('/removeimgbyid/:id', removeImgById)
Router.delete('/removeallimg', removeAllImg)

module.exports = Router;
  




