import DS from 'ember-data';


export default DS.Model.extend({

  year: DS.attr('string'),
  team:  DS.attr('string'),
  gamesPlayed:  DS.attr('string'),
  record:  DS.attr('string'),
  homeRecord:  DS.attr('string'),
  awayRecord:  DS.attr('string'),
  
});
