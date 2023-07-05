const { array } = require('joi');
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
  views_count: {
    type: Number,
    default: 0,
  },
  images: {
    type: [String],
    required: [true, 'Image is required'],
    default: [],
  },
},
  { versionKey: false, timestamps: true }
);

const Superhero = mongoose.model('Superhero', superheroSchema);

module.exports = {
  Superhero
}