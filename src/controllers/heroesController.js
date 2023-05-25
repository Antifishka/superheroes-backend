const {
    listHeroes,
    getHeroById,
    addHero,
    deleteContact,
    updateContact,
    updateStatusContact,
} = require('../services/heroesService');

const getHeroes = async (req, res, next) => {
    let { page = 1, limit = 5 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const skip = (page - 1) * limit;

    const superheroes = await listHeroes(skip, limit);
    res.status(200).json({ superheroes, page, limit });
};

const getById = async (req, res, next) => {
    const { heroId } = req.params;

    const superhero = await getHeroById(heroId);

    if (!superhero) {
        throw new NotFoundError("Not found");
    }

    res.status(200).json({superhero});
};

const createHero = async (req, res, next) => {
    const {nickname, real_name, origin_description, superpowers, catch_phrase, images} = req.body;

    const newSuperhero = await addHero(nickname, real_name, origin_description, superpowers, catch_phrase, images);

    res.status(201).json({newSuperhero});
};

module.exports = {
    getHeroes,
    getById,
    createHero,
    // removeContact,
    // changeContact,
    // patchContact,
}