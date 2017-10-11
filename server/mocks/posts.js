/* eslint-env node */
//'use strict';

module.exports = function(app) {
  const express = require('express');
  let postsRouter = express.Router();

  postsRouter.get('/api/posts', function(req, res) {
    res.send({
      'posts': [
		  {
			  id:1,
			  title: 'Hockey',
			  author: 1,
			  body: "this is the body"
		  
	  },
		  {id:2,
		  	title: 'Pucks',
		   author: 1,
		    body: "this is the body"
		  }
	  ],
		"authors": [{
			id: 1,
			name: "Brian",
			posts: [1,2]
		}]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/posts', require('body-parser').json());
  app.use('/api/posts', postsRouter);
};
