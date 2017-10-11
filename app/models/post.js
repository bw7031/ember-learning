import DS from 'ember-data';



export default DS.Model.extend({
 author: DS.belongsTo('post'),
 title: DS.attr('string'),
 body: DS.attr('string')
});
