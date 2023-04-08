const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   name: {
      type: String
   },
   age: {
      type: Number
   },
   gender: {
      type: String
   },
   mobile: {
      type: String
   }
}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)