const { addPostValidation, addPatchValidation } = require('./heroValidation');
const upload = require('./upload');
const { uploadHeroImage } = require('./cloudinary');
 
module.exports = {
    addPostValidation,
    addPatchValidation,
    upload,
    uploadHeroImage
}