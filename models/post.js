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
      models.post.hasMany(models.user)
      models.post.hasMany(models.location)
      models.post.hasMany(models.site)
    }
  };
  post.init({
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    siteId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    date: DataTypes.DATE,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};