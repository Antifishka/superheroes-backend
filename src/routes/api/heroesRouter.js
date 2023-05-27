const express = require('express');
const router = new express.Router();
const {
  addPostValidation,
  addPatchValidation,
  uploader,
} = require('../../middlewares');
const { asyncWrapper } = require('../../helpers/apiHelpers');
const ctrl = require('../../controllers/heroesController');

router.get('/', asyncWrapper(ctrl.getHeroes));
router.get('/:heroId', asyncWrapper(ctrl.getById));
router.post('/',
  // addPostValidation,
  uploader.single("image"),
  asyncWrapper(ctrl.createHero));
router.delete('/:heroId', asyncWrapper(ctrl.removeHero));
router.patch('/:heroId', addPatchValidation, asyncWrapper(ctrl.changeHero));

module.exports = router;