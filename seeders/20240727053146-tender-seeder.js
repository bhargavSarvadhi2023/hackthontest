"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tenders",
      [
        {
          title: "New Office Building Construction",
          description:
            "Construction of a new office building with state-of-the-art facilities.",
          minAmount: 500000.0,
          maxAmount: 1000000.0,
          startTime: new Date("2024-08-01T00:00:00Z"),
          endTime: new Date("2024-12-31T23:59:59Z"),
          type: "Construction",
          location: "New York, NY",
          winnerId: null, // Assuming the winner is not assigned yet
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tenders", null, {});
  },
};
