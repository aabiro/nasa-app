const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DMCASchema = new Schema({
 description: { type: String, required: true },
});

module.exports = mongoose.model('DMCA', DMCASchema);
