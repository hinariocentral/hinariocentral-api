'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.tune.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.tune });
  },
};
