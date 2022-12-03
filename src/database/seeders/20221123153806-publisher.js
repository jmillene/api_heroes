"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "publisher",
      [
        {
          heroesPublisher: "DC",
        },
        {
          heroesPublisher: "DC",
        },
        {
          heroesPublisher: "DC",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "DC",
        },
        {
          heroesPublisher: "DC",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "DC",
        },
        {
          heroesPublisher: "Marvel",
        },
        {
          heroesPublisher: "Marvel",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("publisher", null, {});
  },
};
