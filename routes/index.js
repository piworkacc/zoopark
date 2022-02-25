const express = require('express');
const router = express.Router();
const {TarifGrid,PeopleTypes} = require('../db/models')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const tarif = await TarifGrid.findAll({include:  'PeopleType'}, {raw:true})
  console.log(tarif.PeopleType)
  res.render('index', { tarif });
});

module.exports = router;
