const Joi = require('joi');

const signupSchema = Joi.object({
  username: Joi.string().alphanum().required().min(3)
    .max(15),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  password: Joi.string().min(8).max(30).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
    .required(),
});
module.exports = { signupSchema };
