'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('sites', [{
      locationId: 1,
      type: 'amuseument park',
      name: 'Warner Bros Studio',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 2, 
      type: 'landmark',
      name: 'Space Needle',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
      // Note to future self: DO NOT run db:seed:all since it'll populate with the location file too
      // Also change the locationId when pushing to GitHub
    },
    {
      locationId: 3, 
      type: 'restaurant',
      name: 'Gates BBQ',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 4, 
      type: 'restaurant',
      name: 'Miku Toronto',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 5, 
      type: 'nature, parks & gardens',
      name: 'Jardim Botanico',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 6, 
      type: 'food market',
      name: 'Central Market',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 7, 
      type: 'historical site',
      name: 'Duomo di Milano',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    }, 
    {
      locationId: 8, 
      type: 'historical site',
      name: 'Roman Colosseum',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 9, 
      type: 'historical site',
      name: 'St Michael\'s Church',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 10, 
      type: 'amusement park',
      name: 'Tivoli Gardens',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 11, 
      type: 'historical site',
      name: 'Gateway of India - Mumbai',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 12, 
      type: 'historical site',
      name: 'Forbidden City',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 13, 
      type: 'nature, parks & gardens',
      name: 'Yu Garden',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 14, 
      type: 'historical site',
      name: 'Kiyomizu-dera',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      locationId: 15, 
      type: 'historical site',
      name: 'Mandela\'s House',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
