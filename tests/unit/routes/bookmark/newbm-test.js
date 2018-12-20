import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bookmark/newbm', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bookmark/newbm');
    assert.ok(route);
  });
});
