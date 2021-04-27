const Store = (sequelize, DataTypes) => {
  const Store = Sequelize.define("Store", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    timestamp: false,
  })
  return Store;
};
