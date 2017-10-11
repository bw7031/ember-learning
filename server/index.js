/* eslint-env node */
 'use strict';

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };
const bodyParser = require('body-parser');
const express = require('express');
  let postsRouter = express.Router();

module.exports = function(app) {
	app.use(bodyParser.urlencoded({ extended: true}));
	app.post('/token', function(req, res) {
		console.log(res);

		if(req.body.username === 'brian' &&
			req.body.password === 'password'){
			  res.send( { access_token: 'secretcode'});
		} else {
			  res.status(400).send( { error: 'invalid_grant'})
		}
	});



app.get('/api/students', function(req, res) {
	if ( req.headers.authorization !== 'Bearer secretcode') {
		return res.status(401).send('Unauthorized')
	}
	return res.status(200).send({
		students: [
		{id: 1, name: 'Eric'},
		{id: 2, name: 'Elio'}
		]
	});
});
	app.get('/api/posts', function(req, res) {
	if ( req.headers.authorization !== 'Bearer secretcode') {
		return res.status(401).send('Unauthorized')
	}
	return res.status(200).send({
		post: [
		{id: 1, title: 'Eric'},
		{id: 2, title: 'Elio'}
		]
	});
});
};

// module.exports = function(app) {
//   const globSync   = require('glob').sync;
//   const mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
//   const proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

//   // Log proxy requests
//   const morgan = require('morgan');
//   app.use(morgan('dev'));

//   mocks.forEach(route => route(app));
//   proxies.forEach(route => route(app));
// };
