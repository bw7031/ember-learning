import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sports');
  this.route('nbaPlayers', function() {
        this.route('rodman')
  	});
  this.route('nhlPlayers');
  this.route('nflPlayers');
  this.route('mlbPlayers');

  this.route('login');
  this.route('students');
  this.route('posts');
  this.route('about');
  this.route('model');
  this.route('post', { path: 'posts/:post_id' });
  this.route('teamstats');
  this.route('stats');
});

export default Router;
