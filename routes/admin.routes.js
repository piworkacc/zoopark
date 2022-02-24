const { TarifGrid } = require('../db/models');
const router = require('express').Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const tarifGrid = await TarifGrid.findAll({ include: { all: true }, raw: true });
      res.render('admin', { tarifGrid });
    } catch (error) {
      res.send(error);
    }
  });

router.route('/data')
  .get(async (req, res) => {
    try {
      const tarifGrid = await TarifGrid.findAll({ include: { all: true }, raw: true });
      res.send(tarifGrid);
    } catch (error) {
      res.send(error);
    }
  })

router.route('/data/:id')
  .post((req, res) => {
    res.json({ status: 'ok' });
  })
  .delete(async (req, res) => {
    console.log('in route delete');
    res.json({ status: 'ok' });
  })

module.exports = router;

