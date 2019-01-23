module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define('Avatar', {
    image: {
      type: DataTypes.BLOB('long'),
      default: null
    }
  })

  Avatar.associate = function (models) {
    Avatar.belongsTo(models.User, { as: 'user' })
  }

  return Avatar
}
