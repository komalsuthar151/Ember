import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('bookmark', function() {
    this.route('newbm');

    this.route('edit', {
      path: '/edit/:bookmark_id'
    });
  });

  this.route('page-not-found', {
    path: '/*wildcard'
  });
});

export default Router;
