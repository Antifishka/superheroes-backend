const express = require('express');
const router = new express.Router();
const {
  addPostValidation,
  addPatchValidation,
  uploadCloud,
} = require('../../middlewares');
const { asyncWrapper } = require('../../helpers/apiHelpers');
const ctrl = require('../../controllers/heroesController');

router.get('/', asyncWrapper(ctrl.getHeroes));
router.get('/:heroId', asyncWrapper(ctrl.getById));
router.post('/',
  addPostValidation,
  uploadCloud.array("images", 10),
  asyncWrapper(ctrl.createHero));
router.delete('/:heroId', asyncWrapper(ctrl.removeHero));
router.patch('/:heroId', addPatchValidation, asyncWrapper(ctrl.changeHero));

module.exports = router;