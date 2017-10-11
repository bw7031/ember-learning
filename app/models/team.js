import DS from 'ember-data';

export default DS.Model.extend({
homeTeam:DS.attr(),
awayTeam:DS.attr(),
homeScore: DS.attr(),
awayScore: DS.attr(),
homeUser: DS.attr(),
awayUser: DS.attr(),

});
