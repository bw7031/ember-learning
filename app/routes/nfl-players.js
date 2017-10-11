import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return ['Tom Brady', 'Eli Manning', 'Cam Newton'];
  }
});
