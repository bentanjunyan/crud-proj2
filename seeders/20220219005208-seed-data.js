const { DATE } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    const usersList = [
      {
        id: 1,
        name: 'Ben',
        username: 'ben',
        password: '12345',
        email: 'ben@gmail.com',
        status: 'Active',
        photo: '',
        created_at: new Date(),
        updated_at: new Date(),
      },          
    ];

    const childrenList = [
      {
        id: 1,
        name: 'Child',
        dob: new Date(),
        gender: 'M',        
        status: 'Active',
        activity: 'Playing',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },          
    ];

    const eventsList = [
      {
        id: 1,
        date: new Date(),
        description: 'This is event no.1',
        child_id: 1,        
        created_at: new Date(),
        updated_at: new Date(),
      },          
    ];
    await queryInterface.bulkInsert('users', usersList);
    await queryInterface.bulkInsert('children', childrenList);
    await queryInterface.bulkInsert('events', eventsList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('children', null, {});
    await queryInterface.bulkDelete('events', null, {});
  },
};