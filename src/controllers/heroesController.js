const {
    listHeroes,
    getHeroById,
    addHero,
    deleteHero,
    updateHero,
} = require('../services/heroesService');
const { NotFoundError } = require('../helpers/errors');

const getHeroes = async (req, res, next) => {
    let { page = 1, limit = 5 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const skip = (page - 1) * limit;

    const { superheroes, totalSuperheroes } = await listHeroes(skip, limit);
    res.status(200).json({
        superheroes,
        page,
        per_page: limit,
        total: totalSuperheroes,
    });
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
    const heroData = req.body;

    const newSuperhero = await addHero(req.files, heroData);
    
    res.status(201).json({newSuperhero});
};

const removeHero = async (req, res, next) => {
    const deletedHero = await deleteHero(req.params.heroId);

    if (!deletedHero) {
      throw new NotFoundError(`Superhero with id '${req.params.heroId}' not found`);
    };
  
    res.status(200).json({message: 'Superhero deleted'});
};

const changeHero = async (req, res, next) => {
    const { heroId } = req.params;
    const heroData = req.body;

    const updatedHero = await updateHero(req.files, heroId, heroData);

    if (!updatedHero) {
      throw new NotFoundError(`Contact with id '${heroId}' not found`);
    };

    res.status(200).json({ updatedHero });
};

module.exports = {
    getHeroes,
    getById,
    createHero,
    removeHero,
    changeHero,
}