const { Superhero } = require('../models/heroModel');
const { ConflictError } = require('../helpers/errors');
const { uploadHeroImage } = require("../middlewares/uploadMiddleware");
const fs = require("fs/promises");

const listHeroes = async (skip, limit) => {
    try {
        const superheroes = await Superhero.find({})
            .select({
                real_name: 0,
                origin_description: 0,
                superpowers: 0,
                catch_phrase: 0,
                views_count: 0,
                createdAt: 0,
                updatedAt: 0, 
            })
            .skip(skip)
            .limit(limit);
        
        const totalSuperheroes = await Superhero.countDocuments();

        return { superheroes, totalSuperheroes };
    } catch (error) {
        console.error(error);
    }
};

const getHeroById = async (heroId) => {
    try {
        const heroById = await Superhero.findByIdAndUpdate(
            heroId, { $inc: { views_count: 1 } }
        );
        
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
       
        return newSuperhero
    } catch (error) {
        console.error(error);
    }
};

const deleteHero = async (heroId) => {
    try {
        const deletedHero = await Superhero.findByIdAndDelete(heroId);

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