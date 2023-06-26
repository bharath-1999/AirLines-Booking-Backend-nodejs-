'use strict';

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert('Airplanes',[
      {
        modelNumber: 'Boeng 737',
        capacity: 300,
        createdAt: new Date(),
      updatedAt : new Date()
      },
     {
      modelNumber: 'Airbus a320',
      capacity: 340,
      createdAt: new Date(),
      updatedAt : new Date()
     },
     {
      modelNumber: 'Boeng 777',
        capacity: 500,
        createdAt: new Date(),
      updatedAt : new Date()
     },
     {
      modelNumber: 'Boeng 900',
      createdAt: new Date(),
      updatedAt : new Date(),
      capacity: 310
     
     },
     {
      modelNumber: 'Boend 747',
      capacity: 650,
      createdAt: new Date(),
      updatedAt : new Date()
     }
      ], {});
  
     },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
