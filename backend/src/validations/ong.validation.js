const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  createOng: () => {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        login: Joi.string().required(),
        password: Joi.string()
          .required()
          .min(8),
        email: Joi.string()
          .required()
          .email(),
        whatsapp: Joi.string()
          .required()
          .min(10)
          .max(11),
        street: Joi.string().required(),
        numberAddress: Joi.string(),
        complement: Joi.string(),
        neighborhood: Joi.string().required(),
        city: Joi.string().required(),
        zip: Joi.string().required(),
        uf: Joi.string().length(2),
        country: Joi.string().required(),
      }),
    });
  },
};
