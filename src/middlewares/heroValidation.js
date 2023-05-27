const Joi = require('joi');
const { ValidatoinError } = require('../helpers/errors');

module.exports = {
    addPostValidation: (req, res, next) => {
        const schema = Joi.object({
            nickname: Joi.string()
                .min(3)
                .max(30)
                .required(),
            real_name: Joi.string()
                .min(3)
                .max(30)
                .optional(),
            origin_description: Joi.string()
                .min(8) 
                .max(300)
                .optional(),
            superpowers: Joi.string()
                .min(6) 
                .max(200)
                .optional(),
            catch_phrase: Joi.string()
                .min(6) 
                .max(100)
                .optional(),
            images: Joi.string()
                // .array()
                // .items(Joi.string())
                .optional(),
        });

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
        next(new ValidatoinError("Missing required name field"));
        }

        next();
    },

    addPatchValidation: (req, res, next) => {
        const schema = Joi.object({
            nickname: Joi.string()
                .min(3)
                .max(30)
                .optional(),
            real_name: Joi.string()
                .min(3)
                .max(30)
                .optional(),
            origin_description: Joi.string()
                .min(8) 
                .max(300)
                .optional(),
            superpowers: Joi.string()
                .min(6) 
                .max(200)
                .optional(),
            catch_phrase: Joi.string()
                .min(6) 
                .max(100)
                .optional(),
            images: Joi.string()
                // .array()
                // .items(Joi.string())
                .optional(),
        });

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
        next(new ValidatoinError(validationResult.error));
        }

        next();
    },
};