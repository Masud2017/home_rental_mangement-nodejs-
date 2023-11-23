const sequelize = require('../config/sequelize');
var DataTypes = require('sequelize/lib/data-types');


const Address = sequelize.define(
    "Address",
    {
      id: {
         type: DataTypes.UUID,
         defaultValue: sequelize.UUIDV4,
         primaryKey: true,
      },
 
      road: {
         type: DataTypes.STRING,
         allowNull: false,
      },
 
      house: {
         type: DataTypes.STRING,
         allowNull: false
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zipcode: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
    //    // For the sake of clarity we specify our indexes
    //    indexes: [{ unique: true, fields: ["id"] }],
    }
 );
module.exports = Address;