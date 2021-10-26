'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    const entities = await strapi.query("tune").find(ctx.query, [
      "composer",
      "preview"
    ]);
    return entities.map(entity => sanitizeEntity(entity,
      { model: strapi.models.hymn }
    ));
  },

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.tune.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.tune });
  },
};
