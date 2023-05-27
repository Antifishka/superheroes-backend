const mongoose = require('mongoose');

const superheroSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: [true, 'Nickname is required'],
  },
  real_name: {
    type: String,
  },
  origin_description: {
    type: String,
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
    required: [true, 'Image is required'],
  },
},
  { versionKey: false, timestamps: true }
);

const Superhero = mongoose.model('Superhero', superheroSchema);

module.exports = {
  Superhero
}