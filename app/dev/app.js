(function(){
  var gem = {
    name: 'Honeywell',
    description: 'My Brand',
    contact: 'ykamat@gmail.com'
  };
  var app = angular.module('news', []);
  app.controller('BrandController', function(){
    this.brand = gem;

    console.log('hello world');
  });

})();
