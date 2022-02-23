const router = require('express').Router();
const multer = require('multer');
const { Animal } = require('../db/models');


// Функция для загрузки изображений
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  },
});
const upload = multer({ storage: storage });

//ручка для добавления животного
router.post('/', upload.single('img'), async (req, res) => {
  //логика здесь
})





module.exports = router;
