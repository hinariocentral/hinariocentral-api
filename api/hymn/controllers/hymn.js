'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    const entities = await strapi.query("hymn").find(ctx.query, [
      "author",
      "tune",
      "hymnary",
      "preview"
    ]);
    return entities.map(entity => sanitizeEntity(entity,
      { model: strapi.models.hymn }
    ));
  },

  async findOne(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.services.hymn.findOne({ slug }, [
      "author",
      "author.avatar",
      "tune",
      "tune.composer",
      "tune.composer.avatar",
      "tune.pdf",
      "tune.preview",
      "tune.midi",
      "tune.mp3",
      "hymnary",
      "pdf",
      "preview",
      "midi",
      "mp3"
    ]);
    return sanitizeEntity(entity, { model: strapi.models.hymn });
  },
};
