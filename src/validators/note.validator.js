import Joi from '@hapi/joi';

export const createNote = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(2).required(),
    description: Joi.string().min(2).required(),
    color: Joi.string().min(4).optional(),
   
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    // req.validatedBody = value;
    next();
  }
};
