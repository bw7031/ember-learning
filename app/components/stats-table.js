import Component from '@ember/component';
import TableCommon from '../mixins/table-common';
import { computed } from '@ember/object';

export default Ember.Component.extend(TableCommon, {

		
  columns: Ember.computed(function() {
    return [{
      label: 'Year',
      valuePath: 'year',
      width: '80px',
    }, {
      label: 'Team',
      valuePath: 'team',
      width: '150px',
    }, {
      label: 'Games Played',
      valuePath: 'gamesPlayed',
      width: '150px'
    }, {
      label: 'Record',
      valuePath: 'record',
      width: '150px'
    }, {
      label: 'Home Record',
      valuePath: 'homeRecord',
	  width: '80px'
    }, {
     label: 'Away Record',
      valuePath: 'awayRecord',
	  width: '80px'
    }];
  })

	});
		













