const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kzwEventSchema = new Schema({
  //TODO: change name, room and description to required
  name: String,
  room: String,
  speaker: String,
  building: String,
  date: String,
  hour: String,
  description: String,
  pplLimit: Number,
  pplRegistered: Number
  //participants: [Schema.Types.ObjectId]
});

const kzw_event = mongoose.model('kzw_events',kzwEventSchema, 'kzw_events');

module.exports = kzw_event;
