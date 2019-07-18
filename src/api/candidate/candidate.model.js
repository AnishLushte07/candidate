const properties = require('./candidate.property');

module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', Object.assign(properties(DataTypes)), {
    tableName: 'candidates',
    underscored: true,
    timestamps: true,
    createdAt: 'created_on',
    updatedAt: false,
  });

  return Candidate;
};

