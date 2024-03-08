const mongoose = require('mongoose');

const employeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String },
    position: { type: String },
    salary: { type: Number }
});

module.exports = mongoose.model('empploye', employeSchema);