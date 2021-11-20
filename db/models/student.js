const Sequelize = require('sequelize');
const db = require('../db');


const Student = db.define('Student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
   type:  Sequelize.STRING,
   allowNull: false,
  },
  email: {
   type: Sequelize.STRING,
   allowNull: false,
   validate: {
     isEmail: true
   }
  }

});



module.exports = Student;
