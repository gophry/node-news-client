(function(){

  var brand = angular.module('brand',[]);

  // Module BRAND Create Controller.
  brand.controller('BrandCreate', function(){

  });

  // Module BRAND Read Controller.
  brand.controller('BrandReadController',['$http', function($http){
    var brands = this;
    brands.settings = [ ];

    $http.get('brand/brandModel.json').success(function(data){
      brands.settings = data;//assign fetched data
      console.dir(brands.settings);
    });
  }]);

  // Module BRAND Edit Controller.
  brand.controller('BrandUpdate', function(){

  });
  // Module BRAND Delete(archive) Controller.
  brand.controller('BrandDelete', function(){

  });



})();
