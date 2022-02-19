module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('children', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      gender: {
        type: Sequelize.STRING,
      },      
      status: {
        type: Sequelize.STRING,
      },
      activity: {
        type: Sequelize.STRING,
      },    
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },   
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('children');
  },
};