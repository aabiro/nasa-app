const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
 url: { type: String, required: true },
 date: { type: Date, required: true },
 type: { type: String, required: true },
 note: { type: String },
});

module.exports = mongoose.model('Notice', noticeSchema);
