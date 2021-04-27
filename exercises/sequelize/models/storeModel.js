const Store = (sequelize, DataTypes) => {
  const Store = sequelize.define("Store", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    timestamp: false,
  })
  return Store;
};

module.exports = Store;
