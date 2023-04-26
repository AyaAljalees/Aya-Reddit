const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  image_url: Joi.string().required(),
  content: Joi.string().min(3).max(30).required(),
});

module.exports = { postSchema };
