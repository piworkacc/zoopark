const router = require('express').Router();
const multer = require('multer');
const { Animal } = require('../db/models');


const upload = multer({ dest:"public/images/"});


//animal
router.get('/', async (req, res) => {
const animal = await Animal.findAll()

   res.render('animal',{animal})
})



//ДОБАВЛЕНИЕ ручка для добавления животного
//animal/
router.post('/', upload.single('img'), async (req, res) => {
   const {id} = req.session.userId
   const img = req.file.path.split('/').slice(1).join('/');
   try {
      const createAnimal = await Animal.create({
         img,
         title,
         description,
         user_id: id
       })
      //  res.sendStatus(200)
       res.json(createAnimal);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
 
})

//УДАЛЕНИЕ
//animal/
//===============================================================================================================================================================
router.delete('/animal/:id', async(req, res) => {


   const {id} = req.params;
   try {
      await Animal.destroy({where: {id}})
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500)
   }

})

// //===============================================================================================================================================================

// // //РЕДАКТИРОВАНИЕ
//animal/:id

router.put('/animal/:id', upload.single('img'),async (req, res) => {

   const {id} = req.params;
   const img = req.file.path.split('/').slice(1).join('/');
   const {title, description} = req.body;
   try {
   const animalUpdate = await Animal.update({img,title, description},{where: {id:id}})
      res.json(animalUpdate)
   } catch (error) {
      console.log(error);
      res.sendStatus(500)
   }
  
})





module.exports = router;
