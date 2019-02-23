module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Category.associate = function (models) {
    Category.belongsTo(models.User, {
      as: 'user'
    })
  }

  return Category
}
