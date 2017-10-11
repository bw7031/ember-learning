import Mirage, { faker } from 'ember-cli-mirage';

faker.locale = 'en_US';


export default Mirage.Factory.extend({
  year: faker.name.year,
  team: faker.name.team,
  gamesPlayed: faker.name.gamesPlayed,
  record: faker.name.record,
  homeRecord: faker.name.homeRecord,
  awayRecord: faker.name.awayRecord,
  
});

