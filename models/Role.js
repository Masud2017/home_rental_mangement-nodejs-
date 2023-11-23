const sequelize = require('../config/sequelize');
var DataTypes = require('sequelize/lib/data-types');


const Role = sequelize.define(
    "Role",
    {
      id: {
         type: DataTypes.UUID,
         defaultValue: sequelize.UUIDV4,
         primaryKey: true,
      },
 
      role: {
         type: DataTypes.STRING,
         allowNull: false,
      },
    },
    {
    //    // For the sake of clarity we specify our indexes
    //    indexes: [{ unique: true, fields: ["id"] }],
    }
 );

module.exports = Role;