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
      models.post.belongsTo(models.user)
    }
  };
  post.init({
    userId: DataTypes.INTEGER,
    cityName: DataTypes.STRING,
    countryName: DataTypes.STRING,
    regionName: DataTypes.STRING,
    siteName: DataTypes.STRING,
    date: DataTypes.DATE,
    type: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};