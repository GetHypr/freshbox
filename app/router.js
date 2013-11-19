var Router = Ember.Router.extend();

Router.map(function() {
  this.route('our-boxes');
  this.resource('store', function() {
    this.resource('category', {path:'/:category_id'}, function() {
      this.resource('product', {path:'/:product_id'});
    });
  });
});

export default Router;