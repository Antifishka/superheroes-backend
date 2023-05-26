const mongoose = require('mongoose');
const { Superhero } = require('../models/heroModel');
const { NotFoundError } = require('../helpers/errors');
require('colors');

const listHeroes = async (skip, limit) => {
    try {
        const superheroes = await Superhero.find({})
            .select({
                superpowers: 0,
                catch_phrase: 0,
                createdAt: 0,
                updatedAt: 0, 
            })
            .skip(skip)
            .limit(limit);

        console.log(`Total superheroes: ${superheroes.length}`.green);
        return superheroes;
    } catch (error) {
        console.error(error);
    }
};

const getHeroById = async (heroId) => {
    try {
        const heroById = await Superhero.findById(heroId);
        console.log(`Superhero with id '${heroId}'`.cyan, heroById);
        
        return heroById;
    } catch (error) {
        console.error(error);
    }
};

const addHero = async (
    nickname, real_name, origin_description, superpowers, catch_phrase, images) => {
    try {
        const newSuperhero = new Superhero(
        { nickname, real_name, origin_description, superpowers, catch_phrase, images });
        await newSuperhero.save();

        console.log(`Superhero ${nickname} successfully added.`.yellow);
        return newSuperhero;
    } catch (error) {
        console.error(error);
    }
};

const deleteHero = async (heroId) => {
    try {
        const deletedHero = await Superhero.findByIdAndDelete(heroId);

        console.log(`Contact with id '${heroId}' successfully deleted.`.blue);
        return deletedHero;
    } catch (error) {
        console.error(error);
    }
};

const updateHero = async (heroId, nickname, real_name, origin_description, superpowers, catch_phrase, images) => {
  try {
    await Superhero.findByIdAndUpdate(heroId,
        { $set: { nickname, real_name, origin_description, superpowers, catch_phrase, images } }
    );

    const updatedHero = await Superhero.findById(heroId);

    console.log(`Contact with id '${heroId}' successfully updated.`.bgWhite);
    return updatedHero;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
    listHeroes,
    getHeroById,
    addHero,
    deleteHero,
    updateHero,
};