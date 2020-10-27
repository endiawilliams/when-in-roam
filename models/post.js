'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  post.init({
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    siteId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    date: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};