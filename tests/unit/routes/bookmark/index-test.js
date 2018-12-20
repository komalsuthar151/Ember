import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bookmark/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bookmark/index');
    assert.ok(route);
  });
});
