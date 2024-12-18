import Sequelize from 'sequelize';

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: () => new Date(),
      },
    }, {
        sequelize, // db connection
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: 'User', // model name
        tableName: 'users', // table name
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci'
    });
  }
}

export default User;