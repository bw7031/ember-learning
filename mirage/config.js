




	import Ember from 'ember';

const {
  A: emberArray
} = Ember;
export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  this.passthrough('/write-coverage');

  /*
    Config (with defaults).
    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api'; // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/stats', function(schema, request) {
    let { page, limit, sort, dir } = request.queryParams;
    let stats = schema.stats.all().models;

    page = Number(page || 1);
    limit = Number(limit || 20);
    dir = dir || 'asc';

    let meta = {
      page,
      limit,
      totalPages: Math.ceil(stats.length / limit)
    };

    if (sort) {
      stats = emberArray(stats).sortBy(sort);
      if (dir !== 'asc') {
        stats = stats.reverse();
      }
    }

    let offset = (page - 1) * limit;
    stats = stats.slice(offset, offset + limit);

    return { stats, meta };
  });
}
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

