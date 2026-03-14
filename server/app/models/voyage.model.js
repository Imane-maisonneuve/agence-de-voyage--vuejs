module.exports = (connex, Sequelize) => {
  const Voyage = connex.define("voyage", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    price: {
      type: Sequelize.REAL,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
  });
  return Voyage;
};
