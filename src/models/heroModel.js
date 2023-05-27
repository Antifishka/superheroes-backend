const mongoose = require('mongoose');

const superheroSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: [true, 'Nickname is required'],
  },
  real_name: {
    type: String,
    // required: [true, 'Real name is required'],
  },
  origin_description: {
    type: String,
    // required: [true, 'Origin description is required'],
  },
  superpowers: {
    type: String,
  },
  catch_phrase: {
    type: String,
  },
  images: {
    type: String,
    default: null,
  },
},
  { versionKey: false, timestamps: true }
);

const Superhero = mongoose.model('Superhero', superheroSchema);

module.exports = {
  Superhero
}