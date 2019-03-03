module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    priority: {
      type: DataTypes.STRING,
      defaultValue: 'Low'
    },
    dueDate: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    dueTime: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    recurring: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    note: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    items: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    categories: {
      type: DataTypes.TEXT,
      defaultValue: null
    }
  })

  Todo.associate = function (models) {
    Todo.belongsTo(models.User, { as: 'user' })
  }

  return Todo
}
