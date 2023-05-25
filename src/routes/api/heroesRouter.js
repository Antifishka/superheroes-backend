const express = require('express');
const router = new express.Router();
// const {
//   addPostValidation,
//   addPutValidation,
//   addPatchValidation,
// } = require('../../middlewares/contactValidation');
const { asyncWrapper } = require('../../helpers/apiHelpers');
const ctrlHero = require('../../controllers/heroesController');

router.get('/', asyncWrapper(ctrlHero.getContacts));
router.get('/:heroId', asyncWrapper(ctrlHero.getById));
// router.post('/', addPostValidation, asyncWrapper(ctrlHero.createContact));
router.post('/', asyncWrapper(ctrlHero.createContact));
router.delete('/:heroId', asyncWrapper(ctrlHero.removeContact));
// router.put('/:heroId', addPutValidation, asyncWrapper(ctrlHero.changeContact));
router.put('/:heroId', asyncWrapper(ctrlHero.changeContact));
// router.patch('/:heroId', addPatchValidation, asyncWrapper(ctrlHero.patchContact));
router.patch('/:heroId', asyncWrapper(ctrlHero.patchContact));

module.exports = router;