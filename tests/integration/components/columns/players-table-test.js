import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('columns/players-table', 'Integration | Component | columns/players table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{columns/players-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#columns/players-table}}
      template block text
    {{/columns/players-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
