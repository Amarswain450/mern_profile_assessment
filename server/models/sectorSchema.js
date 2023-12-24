const mongoose = require('mongoose');

const sectorSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['manufacturing', 'foodBeverage', 'furniture', 'machinery', 'metalworking', 'other', 'service'],
  },
  name: {
    type: String,
    required: true,
  },
});

const Sector = mongoose.model('Sector', sectorSchema);

module.exports = Sector;