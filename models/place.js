const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  bookCoffee: Boolean, // book:yes, coffee:no
  location: { type: { type: String }, coordinates: [Number] }
});
placeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Place', placeSchema);
