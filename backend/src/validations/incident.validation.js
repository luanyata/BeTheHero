const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  listIncidents: () => {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
      })
    });
  },
  createIncident: () => {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown(),
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string()
          .required()
          .max(50),
        description: Joi.string()
          .required()
          .max(255),
        value: Joi.number()
      })
    });
  },
  deleteIncident: () => {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
      })
    });
  }
};
