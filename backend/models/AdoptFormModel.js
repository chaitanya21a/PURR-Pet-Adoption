const mongoose = require('mongoose');

const AdoptFormSchema = new mongoose.Schema({
  user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pet:        { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  message:    { type: String },
  status:     { type: String, enum: ['pending','approved','rejected'], default: 'pending' },
  createdAt:  { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdoptForm', AdoptFormSchema);
