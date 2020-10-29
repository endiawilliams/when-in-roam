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
      models.post.hasMany(models.location)
      models.post.hasMany(models.site)
      models.post.belongsTo(models.user)
    }
  };
  post.init({
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    siteId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    type: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};