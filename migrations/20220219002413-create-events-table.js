module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },      
      date: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.STRING,
      },           
      child_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'children',
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
    await queryInterface.dropTable('events');
  },
};