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
         img: '111.img',
         title: 'Тигр',
         description: 'Амурский',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        img: '111.img',
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
