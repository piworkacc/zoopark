'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Animals', [{
         img: '/images/elephant.jpeg',
         title: 'Слон',
         description: 'Индийский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/ape.jpeg',
         title: 'Горилла',
         description: 'Африканская',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/coala.jpeg',
         title: 'Коала',
         description: 'Австралийская',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/crocodile.jpeg',
         title: 'Крокодил',
         description: 'Южно-американский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/deer.jpeg',
         title: 'Олень',
         description: 'Норвежский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/giraffe.jpeg',
         title: 'Жираф',
         description: 'Африканский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/hippo.jpeg',
         title: 'Гиппопотам',
         description: 'Африканский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/leopard.jpeg',
         title: 'Леопард',
         description: 'Южно-Американский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/monkey.jpeg',
         title: 'Обезьяна',
         description: 'Милая',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/tiger.jpeg',
         title: 'Тигр',
         description: 'Амурский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/flaming.jpeg',
         title: 'Фламинго',
         description: 'Розовый',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/eagle.jpeg',
         title: 'Орел',
         description: 'Русский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/white_tiger.jpeg',
         title: 'Белый Тигр',
         description: 'Азиатский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/wolf.jpeg',
         title: 'Волк',
         description: 'Тамбовский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         img: '/images/zebra.jpeg',
         title: 'Зебра',
         description: 'Африканская',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        img: '/images/bear.jpeg',
        title: 'Медведь',
        description: 'Бурый',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Animals', null, {});
  }
};
