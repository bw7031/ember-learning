import Ember from 'ember';
import { A } from '@ember/array';
import Route from '@ember/routing/route';


export default Ember.Route.extend(  {
	 model() {
    return Ember.A([]);
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('page', 1);
    }
  }
});
