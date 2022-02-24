const express = require('express');

const router = express.Router();
// const {  } = require('../db/models');

//===============================================================================================================================================================
// ОТРИСОВКА ЖИВОТНЫХ
//animal/
router.get('/', async(req, res) => {
   
   // const allAminals = await Animal.findAll();
   res.render('animal')
})

//===============================================================================================================================================================

//ДОБАВЛЕНИЕ ЖИВОТНЫХ
//animal/add
router.post('/add', async(req, res) => {
   
   const user_id = req.session.user_id;
   const {name, img, user_id} = req.body;
   try {
      const newAnimal = await Animal.create({})
      res.json(newAnimal);//ПЕРЕДАЧА НА ФРОНТ ДАННЫХ
   } catch (error) {
      console.log(error);
      res.sendStatus(555)
   }
  
})
//===============================================================================================================================================================





//РЕДАКТИРОВАНИЕ
router.get('/animal/:id', async (req, res) => {
   const {id} = req.params
   const getId = await Animal.FindOne({where: {Айди поста: равен id(reqparams)}})
   res.render('')

})



//РЕДАКТИРОВАНИЕ
//animal/:id
router.put('/animal:/id', async (req, res) => {

  const {name, img} = req.body;
  const {id} = req.params;
  try {
   const animalUpdate = await Animal.update({})
   res.json(animalUpdate)
  } catch (error) {
     console.log(error);
  }
  

})
//===============================================================================================================================================================
//УДАЛЕНИЕ

router.delete('/animal/:id', async (req, res) => {

   const {id} = req.params;
   try {
      await Animal.destroy({where: {id}})
      res.sendStatus(200);
   } catch (error) {
      res.sendStatus(555)
   }


})





module.exports = router;
