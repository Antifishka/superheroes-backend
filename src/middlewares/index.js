const { addPostValidation, addPatchValidation } = require('./heroValidation');
const uploadCloud = require('./uploadMiddleware');
 
module.exports = {
    addPostValidation,
    addPatchValidation,
    uploadCloud,
}