import Joi from '@hapi/joi';

export const signInRegistration = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().min(2).required(),
    password: Joi.string().min(8).required()
    
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    // req.validatedBody = value;
    next();
  }
};
