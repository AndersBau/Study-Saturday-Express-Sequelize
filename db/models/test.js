const Sequelize = require('sequelize');
const db = require('../db');
const Student = require('./student');

const Test = db.define('Test', {
  subject: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Test.belongsTo(Student)

module.exports = Test;
