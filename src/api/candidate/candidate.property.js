module.exports = DataTypes => ({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: DataTypes.STRING,
  mobile: DataTypes.STRING,
  email: DataTypes.STRING,
  source: DataTypes.STRING,
  referred_by: DataTypes.STRING,
  interview_location: DataTypes.STRING,
  interview_date: DataTypes.DATEONLY,
});
