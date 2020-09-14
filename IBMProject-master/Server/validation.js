//check data validation
const Joi = require('@hapi/joi');

const validateUserRegister = (data) => {
  const validateSchema = Joi.object({
    username: Joi.string()
      .min(6)
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(8)
      .required()
      .email(),
  
  });
  return validateSchema.validate(data);
}

const validateUserLogin = (data) => {
  const validateSchema = Joi.object({
    username: Joi.string()
      .min(6)
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
  });
  return validateSchema.validate(data);
}

module.exports.validateUserRegister = validateUserRegister;
module.exports.validateUserLogin = validateUserLogin;