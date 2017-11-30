const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const privacySchema = new Schema({
 description: { type: String, required: true },
});

module.exports = mongoose.model('Privacy', privacySchema);
