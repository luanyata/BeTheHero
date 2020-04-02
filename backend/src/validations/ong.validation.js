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
        city: Joi.string().required(),
        uf: Joi.string().length(2)
      })
    });
  }
};
