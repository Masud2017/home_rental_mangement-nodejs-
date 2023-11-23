const sequelize = require('../config/sequelize');
var DataTypes = require('sequelize/lib/data-types');
var Address = require('./Adress');
var Role = require('./Role');


const User = sequelize.define(
    "User",
    {
      id: {
         type: DataTypes.UUID,
         defaultValue: sequelize.UUIDV4,
         primaryKey: true,
      },
 
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
 
      email: {
         type: DataTypes.STRING,
         allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
    //    // For the sake of clarity we specify our indexes
    //    indexes: [{ unique: true, fields: ["id"] }],
    }
 );

 // providing assosiations
 User.hasOne(Address,{
   foreignKey : {
      name : 'user_id',
   },
   onDelete : 'CASCADE',
   onUpdate : 'CASCADE'
   }
);
Address.belongsTo(User);

User.belongsToMany(Role,{through : 'UserRoles'});
Role.belongsToMany(User,{through : 'UserRoles'});
// providing assosiations done

console.log(User === sequelize.models.User);
 module.exports = User;