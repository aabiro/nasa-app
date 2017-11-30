const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
 title: { type: String, required: true },
 description: { type: String, required: true },
 isPrivate: { type: Boolean, required: true },
 images: { type: [] },
 ratings: { type: [] },
});

module.exports = mongoose.model('Collection', collectionSchema);
