const { addPostValidation, addPatchValidation } = require('./heroValidation');
const uploader = require('./multer');
const { uploadHeroImage } = require('./cloudinary');
 
module.exports = {
    addPostValidation,
    addPatchValidation,
    uploader,
}