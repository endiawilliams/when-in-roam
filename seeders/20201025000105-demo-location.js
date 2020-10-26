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
    await queryInterface.bulkInsert('locations', [{
      city: 'Los Angeles',
      country: 'United States',
      region: 'North America',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    }, 
    {
      city: 'Seattle',
      country: 'United States',
      region: 'North America',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Kansas City',
      country: 'United States',
      region: 'North America',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Toronto',
      country: 'Canada',
      region: 'North America',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Rio de Janeiro',
      country: 'Brazil',
      region: 'South America',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Santiago',
      country: 'Chile',
      region: 'South America',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Milan',
      country: 'Italy',
      region: 'Europe',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Rome',
      country: 'Italy',
      region: 'Europe',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Hamburg',
      country: 'Germany',
      region: 'Europe',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Copenhagen',
      country: 'Denmark',
      region: 'Europe',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Mumbai',
      country: 'India',
      region: 'Asia',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Beijing',
      country: 'China',
      region: 'Asia',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Shanghai',
      country: 'China',
      region: 'Asia',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Kyoto',
      country: 'Japan',
      region: 'Asia',
      createdAt: '2020-10-19 23:12:40.033-05',
      updatedAt: '2020-10-19 23:12:40.033-05'
    },
    {
      city: 'Johannesburg',
      country: 'South Africa',
      region: 'Africa',
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
    await queryInterface.bulkDelete('locations', null, {});
  }
};