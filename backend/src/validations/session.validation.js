const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  createSession: () => {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        login: Joi.string().required(),
        password: Joi.string()
          .required()
          .min(8)
      })
    });
  }
};
