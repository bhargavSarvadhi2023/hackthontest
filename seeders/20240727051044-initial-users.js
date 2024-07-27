"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          email: "admin@sarvadhi.com",
          password: "admin@1234", // Remember to hash your passwords in a real scenario
          role: "admin",
          companyName: "Admin Company",
          address: "123 Admin St, Admin City, Admin Country",
          userType: "admin",
          phoneNumber: "9978863413",
          experience: 10,
          completedProjects: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user1",
          email: "user1@sarvadhi.com",
          password: "user1@1234", // Remember to hash your passwords in a real scenario
          role: "user",
          companyName: "User Company 1",
          address: "456 User Ave, User City, User Country",
          userType: "user",
          phoneNumber: "7573072953",
          experience: 5,
          completedProjects: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user2",
          email: "user2@sarvadhi.com",
          password: "user2@1234", // Remember to hash your passwords in a real scenario
          role: "user",
          companyName: "User Company 2",
          address: "789 User Blvd, User City, User Country",
          userType: "user",
          phoneNumber: "8212345678",
          experience: 3,
          completedProjects: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user3",
          email: "user3@sarvadhi.com",
          password: "user3@1234", // Remember to hash your passwords in a real scenario
          role: "user",
          companyName: "User Company 3",
          address: "321 User St, User City, User Country",
          userType: "user",
          phoneNumber: "9321345678",
          experience: 7,
          completedProjects: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user4",
          email: "user4@sarvadhi.com",
          password: "user4@1234", // Remember to hash your passwords in a real scenario
          role: "user",
          companyName: "User Company 4",
          address: "654 User Ave, User City, User Country",
          userType: "user",
          phoneNumber: "8456789123",
          experience: 4,
          completedProjects: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user5",
          email: "user5@sarvadhi.com",
          password: "user5@1234", // Remember to hash your passwords in a real scenario
          role: "user",
          companyName: "User Company 5",
          address: "987 User Blvd, User City, User Country",
          userType: "user",
          phoneNumber: "7567891234",
          experience: 8,
          completedProjects: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user6",
          email: "user6@sarvadhi.com",
          password: "user6@1234", // Remember to hash your passwords in a real scenario
          role: "user",
          companyName: "User Company 6",
          address: "1234 User Lane, User City, User Country",
          userType: "user",
          phoneNumber: "9876543210",
          experience: 6,
          completedProjects: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user7",
          email: "user7@sarvadhi.com",
          password: "user7@1234", // Remember to hash your passwords in a real scenario
          role: "user",
          companyName: "User Company 7",
          address: "5678 User Drive, User City, User Country",
          userType: "user",
          phoneNumber: "6789012345",
          experience: 2,
          completedProjects: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user8",
          email: "user8@sarvadhi.com",
          password: "user8@1234", // Remember to hash your passwords in a real scenario
          role: "user",
          companyName: "User Company 8",
          address: "91011 User Road, User City, User Country",
          userType: "user",
          phoneNumber: "7890123456",
          experience: 9,
          completedProjects: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user9",
          email: "user9@sarvadhi.com",
          password: "user9@1234", // Remember to hash your passwords in a real scenario
          role: "user",
          companyName: "User Company 9",
          address: "1213 User Blvd, User City, User Country",
          userType: "user",
          phoneNumber: "8901234567",
          experience: 11,
          completedProjects: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user10",
          email: "user10@sarvadhi.com",
          password: "user10@1234", // Remember to hash your passwords in a real scenario
          role: "user",
          companyName: "User Company 10",
          address: "1415 User Street, User City, User Country",
          userType: "user",
          phoneNumber: "9012345678",
          experience: 12,
          completedProjects: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
