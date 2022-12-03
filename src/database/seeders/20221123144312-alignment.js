'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('alignment', [{
        heroes_id: 1,
        alignment: 'good',
        power: 'without powers'
      },
      {
        heroes_id: 2,
        alignment: 'bad',
        power: 'without powers'
      },
      {
        heroes_id: 3,
        alignment: 'good',
        power: 'without powers'
      },
      {
        heroes_id: 4,
        alignment: 'bad',
        power: 'magnetism'
      },
      {
        heroes_id: 5,
        alignment: 'good',
        power: 'web-slinging'
      },
      {
        heroes_id: 6,
        alignment: 'good',
        power: 'manipulate time'
      },
      {
        heroes_id: 7,
        alignment: 'good',
        power: 'adamantium claws'
      },
      {
        heroes_id: 8,
        alignment: 'good',
        power: 'Force'
      },
      {
        heroes_id: 9,
        alignment: 'good',
        power: 'change shape'
      },
      {
        heroes_id: 10,
        alignment: 'good',
        power: 'without powers'
      },
      {
        heroes_id: 11,
        alignment: 'bad',
        power: 'telekinesis'
      },
      {
        heroes_id: 12,
        alignment: 'good',
        power: 'Immortality'
      },
      {
        heroes_id: 13,
        alignment: 'good',
        power: 'can fly'
      },
      {
        heroes_id: 14,
        alignment: 'good',
        power: 'telepathy'
      },
      {
        heroes_id: 15,
        alignment: 'good',
        power: 'without powers'
      },
      {
        heroes_id: 16,
        alignment: 'good',
        power: 'create anything'
      },
      {
        heroes_id: 17,
        alignment: 'good',
        power: 'regenerative Healing'
      }
    ,
    {
      heroes_id: 18,
      alignment: 'good',
      power: 'without powers'
    },
    {
      heroes_id: 19,
      alignment: 'good',
      power: 'without powers'
    },
    {
      heroes_id: 20,
      alignment: 'good',
      power: 'camouflage'
    },
    {
      heroes_id: 21,
      alignment: 'bad',
      power: 'telepathy'
    },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('alignment', null, {});
  }
};
