const express = require('express');
const router = new express.Router();
const {
  addPostValidation,
  addPatchValidation,
  upload,
} = require('../../middlewares');
const { asyncWrapper } = require('../../helpers/apiHelpers');
const ctrlHero = require('../../controllers/heroesController');

router.get('/', asyncWrapper(ctrlHero.getHeroes));
router.get('/:heroId', asyncWrapper(ctrlHero.getById));
router.post('/',
  // addPostValidation,
  upload.single("images"),
  asyncWrapper(ctrlHero.createHero));
router.delete('/:heroId', asyncWrapper(ctrlHero.removeHero));
router.patch('/:heroId', addPatchValidation, asyncWrapper(ctrlHero.changeHero));

module.exports = router;