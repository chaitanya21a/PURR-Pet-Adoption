const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  species:     { type: String, required: true },
  breed:       { type: String },
  age:         { type: Number },
  status:      { type: String, enum: ['available','adopted'], default: 'available' },
  description: { type: String },
  images:      { type: [String], default: [] },
  owner:       { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location:    { type: String },
  createdAt:   { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pet', PetSchema);
