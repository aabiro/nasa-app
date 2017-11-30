const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
 url: { type: String, required: true },
 description: { type: String, required: true },
 isSelected: { type: Boolean, required: true },
});

module.exports = mongoose.model('Image', imageSchema);
