const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
  {
    _id: Number,
    name: String,
    team: String,
    salary: Number
  }
);

//컬렉션과 매핑
module.exports = mongoose.model('employees', EmployeeSchema);