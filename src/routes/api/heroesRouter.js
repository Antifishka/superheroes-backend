const express = require('express');
const router = new express.Router();
// const {
//   addPostValidation,
//   addPutValidation,
//   addPatchValidation,
// } = require('../../middlewares/contactValidation');
const { asyncWrapper } = require('../../helpers/apiHelpers');
const ctrlHero = require('../../controllers/heroesController');

router.get('/', asyncWrapper(ctrlHero.getHeroes));
router.get('/:heroId', asyncWrapper(ctrlHero.getById));
// // router.post('/', addPostValidation, asyncWrapper(ctrlHero.createContact));
router.post('/', asyncWrapper(ctrlHero.createHero));
router.delete('/:heroId', asyncWrapper(ctrlHero.removeHero));
// router.put('/:heroId', addPutValidation, asyncWrapper(ctrlHero.changeContact));
router.patch('/:heroId', asyncWrapper(ctrlHero.changeHero));
// // router.patch('/:heroId', addPatchValidation, asyncWrapper(ctrlHero.patchContact));
// router.patch('/:heroId', asyncWrapper(ctrlHero.patchContact));

module.exports = router;