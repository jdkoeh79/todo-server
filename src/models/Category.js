module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Category.associate = function (models) {
    Category.belongsToMany(models.Todo, {
      as: 'category',
      through: 'TodoCategory',
      foreignKey: 'categoryId'
    })
  }

  return Category
}
