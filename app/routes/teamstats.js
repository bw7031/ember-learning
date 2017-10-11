import Ember from 'ember';

let team = [{
	id: 1, 
	homeTeam: 'hurricanes',
	awayTeam: 'rangers'
}, {
	id: 2, 
	homeTeam: 'kings',
	awayTeam: 'ducks'
}
		   ]

export default Ember.Route.extend({
	model() {
		return team;
	}
});
