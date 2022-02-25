const express = require('express');
const router = express.Router();
const {TarifGrid, Animal} = require('../db/models')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const tarif = await TarifGrid.findAll({include:  'PeopleType'}, {raw:true})
  const animals = await Animal.findAll()
  console.log(tarif.PeopleType)
  res.render('index', { tarif, animals });
});

module.exports = router;
