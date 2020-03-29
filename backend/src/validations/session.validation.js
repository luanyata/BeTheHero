const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  createSession: () => {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
      })
    });
  }
};
