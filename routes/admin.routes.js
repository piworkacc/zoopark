const { TarifGrid, DayType, PeopleType } = require('../db/models');
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
      const tarifGrid = await TarifGrid.findAll({
        include: { all: true },
        raw: true,
      });
      console.log(tarifGrid);
      res.send(tarifGrid);
    } catch (error) {
      console.log(error);
      res.send(error);
    }

  })
  .post(async (req, res) => {
    try {
      // const tarifGrid = await TarifGrid.update(
      //   { title: 'a very different title now' },
      //   { where: { _id: 1 } }
      // )
      res.send(tarifGrid);
    } catch (error) {
      res.send(error);
    }

  })

router.route('/data/:id')
  .post(async (req, res) => {


    try {
      const newTarif = req.body;
      if (req.body.date) {
        newTarif.date = new Date(req.body.date).toISOString();
      } else {
        newTarif.date = new Date().toISOString();
      }

      const dayTypeIsAwalibale = await DayType.findOne({ where: { name: req.body.dayType_id }, raw: true });
      if (dayTypeIsAwalibale?.id) {
        newTarif.dayType_id = dayTypeIsAwalibale.id;
      } else {
        const newDayType = await DayType.create({ name: req.body.dayType_id });
        newTarif.dayType_id = newDayType.dataValues.id;
      }

      const peopleTypeIsAwalibale = await PeopleType.findOne({ where: { name: req.body.peopleType_id }, raw: true });
      if (peopleTypeIsAwalibale?.id) {
        newTarif.peopleType_id = peopleTypeIsAwalibale.id;
      } else {
        const newPeopleType = await PeopleType.create({ name: req.body.peopleType_id });
        newTarif.peopleType_id = newPeopleType.dataValues.id;
      }

      if (req.body.value) {
        newTarif.value = req.body.value;
      } else {
        newTarif.value = 0;
      }
      const result = await TarifGrid.create(newTarif);
      return res.json({ result });
    } catch (error) {
      return res.json(error);
    }
  })
  .delete(async (req, res) => {
    const tarifGrid = await TarifGrid.destroy({
      where: {
        id: req.params.id,
      }
    });
    return res.json(tarifGrid);
  })

module.exports = router;
