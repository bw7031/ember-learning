import Ember from 'ember';

export default Ember.Component.extend({
	team: null,
	router: Ember.inject.service('-routing'),
	actions: {
		save(team) { Ember.Logger.info('save called');
		team.save()
		.then(
		(value) => {
		Ember.Logger.info(value);
		this.get('router').transitionTo('nba-players');
	     }
	)
 },
		cancel() {
			Ember.logger.info("canceled"); 
		}
	}	
});
