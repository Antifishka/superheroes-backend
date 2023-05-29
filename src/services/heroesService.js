const { Superhero } = require('../models/heroModel');
const { ConflictError } = require('../helpers/errors');
const { uploadHeroImage } = require("../middlewares/uploadMiddleware");
const fs = require("fs/promises");
require('colors');

const listHeroes = async (skip, limit) => {
    try {
        const superheroes = await Superhero.find({})
            .select({
                real_name: 0,
                origin_description: 0,
                superpowers: 0,
                catch_phrase: 0,
                createdAt: 0,
                updatedAt: 0, 
            })
            .skip(skip)
            .limit(limit);
        
        const totalSuperheroes = await Superhero.countDocuments();

        console.log(`Total superheroes: ${superheroes.length}`.green);
        return { superheroes, totalSuperheroes };
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

const addHero = async (images, heroData) => {
    try {
        const { nickname } = heroData;
        const checkSuperhero = await Superhero.findOne({ nickname });

        if (checkSuperhero) {
            throw new ConflictError("Such a superhero already exists");
        };

        const newSuperhero = await Superhero.create({
            ...heroData,
            images: images,
        });
       
        console.log(`Superhero ${nickname} successfully added.`.yellow);
        return newSuperhero
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

const updateHero = async (images, heroId, heroData) => {
    try {
        const hero = await Superhero.findById(heroId);

        const updatedImages = [...hero.images, ...images];

        await Superhero.findByIdAndUpdate(
            heroId, { ...heroData, images: updatedImages}
        );

        const updatedHero = await Superhero.findById(heroId);

        console.log(`Superhero with id '${heroId}' successfully updated.`.bgWhite);
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