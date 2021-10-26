/**
 * Copyright (c) 2021 hinariocentral (hinariocentral <at> gmail.com)
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    const entities = await strapi.query("hymn").find(ctx.query, [
      "author",
      "translator",
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
      "translator",
      "translator.avatar",
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
