export default function initItemModel(sequelize, DataTypes) {
  return sequelize.define(
    'events',
    {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },      
      date: {
        type: DataTypes.DATE,
      },
      description: {
        type: DataTypes.STRING,
      },           
      child_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'children',
          key: 'id',
        },
      },   
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}