const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  listIncidentsById: () => {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    });
  }
};
